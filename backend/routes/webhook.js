// routes/webhook.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import logger from "../utils/logger.js";
import process from "node:process";

import {
  handleCheckoutSessionCompleted,
  handleInvoicePaymentSucceeded,
  handleInvoicePaymentFailed,
  handleSubscriptionUpdated,
  handleSubscriptionDeleted,
  handleSubscriptionCreated,
  handleChargeRefunded,
  handleTrialWillEnd,
} from "../handlers/subscriptionHandlers.js";

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// In-memory cache to prevent duplicate events
const processedEvents = new Map();
const CACHE_TTL = 3600000; // 1 hour

// Clean up old cached events
setInterval(() => {
  const now = Date.now();
  for (const [eventId, timestamp] of processedEvents.entries()) {
    if (now - timestamp > CACHE_TTL) {
      processedEvents.delete(eventId);
    }
  }
}, 600000);

router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      logger.error("Webhook signature verification failed", { error: err.message });
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (processedEvents.has(event.id)) {
      logger.info("Duplicate event received, skipping", { eventId: event.id });
      return res.status(200).send("Duplicate event");
    }

    processedEvents.set(event.id, Date.now());
    res.status(200).send("Event received");

    // Process event asynchronously
    (async () => {
      try {
        switch (event.type) {
          case "checkout.session.completed":
            await handleCheckoutSessionCompleted(event.data.object);
            break;
          case "invoice.payment_succeeded":
            await handleInvoicePaymentSucceeded(event.data.object);
            break;
          case "invoice.payment_failed":
            await handleInvoicePaymentFailed(event.data.object);
            break;
          case "customer.subscription.updated":
            await handleSubscriptionUpdated(event.data.object);
            break;
          case "customer.subscription.deleted":
            await handleSubscriptionDeleted(event.data.object);
            break;
          case "customer.subscription.created":
            await handleSubscriptionCreated(event.data.object);
            break;
          case "charge.refunded":
            await handleChargeRefunded(event.data.object);
            break;
          case "customer.subscription.trial_will_end":
            await handleTrialWillEnd(event.data.object);
            break;
          default:
            logger.info("Unhandled event type", { type: event.type });
        }
      } catch (error) {
        logger.error(`Error processing ${event.type}`, {
          eventId: event.id,
          error: error.message,
        });
        processedEvents.delete(event.id);
      }
    })();
  }
);

export default router;