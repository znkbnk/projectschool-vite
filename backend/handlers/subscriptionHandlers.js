// handlers/subscriptionHandlers.js
import Stripe from "stripe";
import dotenv from "dotenv";
import User from "../models/userModel.js";
import logger from "../utils/logger.js";
import process from "node:process";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const GRACE_PERIOD_DAYS = 3;

// Cache for customer email lookups
const customerCache = new Map();
const CACHE_DURATION = 300000; // 5 minutes

// Helper: Get user by customer ID with caching
const getUserByCustomerId = async (customerId) => {
  try {
    const cached = customerCache.get(customerId);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return User.findOne({ email: cached.email });
    }

    const customerDetails = await stripe.customers.retrieve(customerId);
    
    customerCache.set(customerId, {
      email: customerDetails.email,
      timestamp: Date.now(),
    });

    return User.findOne({ email: customerDetails.email });
  } catch (error) {
    logger.error("Error retrieving customer", {
      customerId,
      error: error.message,
    });
    return null;
  }
};

// Helper: Update user subscription with retry logic
const updateUserSubscription = async (userId, updates, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        updates,
        { new: true, runValidators: true }
      );
      return user;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 100 * (i + 1)));
    }
  }
};

// Handle successful checkout session
const handleCheckoutSessionCompleted = async (session) => {
  const { client_reference_id, subscription, customer } = session;

  if (!subscription) {
    logger.info("Checkout session completed without subscription", { sessionId: session.id });
    return;
  }

  try {
    const subscriptionDetails = await stripe.subscriptions.retrieve(subscription);
    const planInterval = subscriptionDetails.items.data[0]?.plan?.interval;

    const subscriptionData = {
      subscriptionStatus: "subscribed",
      subscriptionId: subscription,
      subscriptionEndDate: new Date(subscriptionDetails.current_period_end * 1000),
      currentBillingDate: new Date(subscriptionDetails.current_period_start * 1000),
      subscriptionPlan: planInterval === "month" ? "monthly" : "annual",
      subscriptionGracePeriodEnd: null,
    };

    let user;

    if (client_reference_id) {
      user = await User.findOneAndUpdate(
        { firebaseUid: client_reference_id },
        subscriptionData,
        { new: true, runValidators: true }
      );
    }

    if (!user && customer) {
      const customerDetails = await stripe.customers.retrieve(customer);
      user = await User.findOneAndUpdate(
        { email: customerDetails.email },
        subscriptionData,
        { new: true, runValidators: true }
      );
    }

    if (!user) {
      logger.error("User not found for checkout session", {
        client_reference_id,
        customer,
        sessionId: session.id,
      });
      return;
    }

    logger.info("Checkout completed, subscription activated", {
      userId: user._id,
      email: user.email,
      plan: subscriptionData.subscriptionPlan,
    });

  } catch (error) {
    logger.error("Error handling checkout.session.completed", {
      sessionId: session.id,
      error: error.message,
    });
  }
};

// Handle successful invoice payment (renewals)
const handleInvoicePaymentSucceeded = async (invoice) => {
  if (!invoice.subscription) return;

  try {
    const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
    const user = await getUserByCustomerId(invoice.customer);

    if (!user) return;

    await updateUserSubscription(user._id, {
      subscriptionStatus: "subscribed",
      subscriptionId: subscription.id,
      subscriptionEndDate: new Date(subscription.current_period_end * 1000),
      currentBillingDate: new Date(subscription.current_period_start * 1000),
      subscriptionGracePeriodEnd: null,
    });

    logger.info("Invoice payment succeeded, subscription renewed", {
      userId: user._id,
      email: user.email,
      invoiceId: invoice.id,
    });

  } catch (error) {
    logger.error("Error handling invoice.payment_succeeded", {
      invoiceId: invoice.id,
      error: error.message,
    });
  }
};

// Handle failed invoice payment
const handleInvoicePaymentFailed = async (invoice) => {
  try {
    const user = await getUserByCustomerId(invoice.customer);
    if (!user) return;

    if (user.subscriptionStatus === "past_due" && user.subscriptionGracePeriodEnd) {
      return;
    }

    const gracePeriodEnd = new Date(Date.now() + GRACE_PERIOD_DAYS * 24 * 60 * 60 * 1000);

    await updateUserSubscription(user._id, {
      subscriptionStatus: "past_due",
      subscriptionGracePeriodEnd: gracePeriodEnd,
    });

    logger.info("Payment failed, grace period applied", {
      userId: user._id,
      email: user.email,
      gracePeriodEnd: gracePeriodEnd.toISOString(),
      invoiceId: invoice.id,
    });

  } catch (error) {
    logger.error("Error handling invoice.payment_failed", {
      invoiceId: invoice.id,
      error: error.message,
    });
  }
};

// Handle subscription updates
const handleSubscriptionUpdated = async (subscription) => {
  try {
    const user = await getUserByCustomerId(subscription.customer);
    if (!user) return;

    const statusMap = {
      active: "subscribed",
      past_due: "past_due",
      canceled: "canceled",
      incomplete: "incomplete",
      incomplete_expired: "not_subscribed",
      trialing: "trialing",
      unpaid: "past_due",
    };

    const status = statusMap[subscription.status] || "subscribed";

    await updateUserSubscription(user._id, {
      subscriptionStatus: status,
      subscriptionId: subscription.id,
      subscriptionEndDate: new Date(subscription.current_period_end * 1000),
      currentBillingDate: new Date(subscription.current_period_start * 1000),
    });

    logger.info("Subscription updated", {
      userId: user._id,
      email: user.email,
      status,
      subscriptionId: subscription.id,
    });

  } catch (error) {
    logger.error("Error handling subscription update", {
      subscriptionId: subscription.id,
      error: error.message,
    });
  }
};

// Handle subscription deletion
const handleSubscriptionDeleted = async (subscription) => {
  try {
    const user = await getUserByCustomerId(subscription.customer);
    if (!user) return;

    await updateUserSubscription(user._id, {
      subscriptionStatus: "not_subscribed",
      subscriptionId: null,
      subscriptionPlan: "free",
      subscriptionGracePeriodEnd: null,
      subscriptionEndDate: null,
    });

    logger.info("Subscription deleted", {
      userId: user._id,
      email: user.email,
      reason: subscription.cancellation_details?.reason || "unknown",
    });

  } catch (error) {
    logger.error("Error handling subscription deletion", {
      subscriptionId: subscription.id,
      error: error.message,
    });
  }
};

// Handle new subscription created
const handleSubscriptionCreated = async (subscription) => {
  if (subscription.status !== "incomplete") return;

  try {
    const user = await getUserByCustomerId(subscription.customer);
    if (!user) return;

    await updateUserSubscription(user._id, {
      subscriptionStatus: "incomplete",
      subscriptionId: subscription.id,
    });

    logger.info("Incomplete subscription created", {
      userId: user._id,
      email: user.email,
      subscriptionId: subscription.id,
    });

  } catch (error) {
    logger.error("Error handling subscription created", {
      subscriptionId: subscription.id,
      error: error.message,
    });
  }
};

// Handle charge refunded
const handleChargeRefunded = async (charge) => {
  try {
    const user = await getUserByCustomerId(charge.customer);
    if (!user || !user.subscriptionId) return;

    await stripe.subscriptions.cancel(user.subscriptionId);

    await updateUserSubscription(user._id, {
      subscriptionStatus: "not_subscribed",
      subscriptionId: null,
      subscriptionPlan: "free",
      subscriptionEndDate: null,
    });

    logger.info("Subscription canceled due to refund", {
      userId: user._id,
      email: user.email,
      chargeId: charge.id,
    });

  } catch (error) {
    logger.error("Error handling charge refunded", {
      chargeId: charge.id,
      error: error.message,
    });
  }
};

// Handle trial ending soon
const handleTrialWillEnd = async (subscription) => {
  try {
    const user = await getUserByCustomerId(subscription.customer);
    if (user) {
      logger.info("Trial ending soon", {
        userId: user._id,
        email: user.email,
        trialEnd: new Date(subscription.trial_end * 1000).toISOString(),
      });
    }
  } catch (error) {
    logger.error("Error handling trial will end", {
      subscriptionId: subscription.id,
      error: error.message,
    });
  }
};

// Clean up cache
setInterval(() => {
  const now = Date.now();
  for (const [customerId, data] of customerCache.entries()) {
    if (now - data.timestamp > CACHE_DURATION) {
      customerCache.delete(customerId);
    }
  }
}, CACHE_DURATION);

export {
  handleCheckoutSessionCompleted,
  handleInvoicePaymentSucceeded,
  handleInvoicePaymentFailed,
  handleSubscriptionUpdated,
  handleSubscriptionDeleted,
  handleSubscriptionCreated,
  handleChargeRefunded,
  handleTrialWillEnd,
};