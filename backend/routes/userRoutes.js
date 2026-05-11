// routes/userRoutes.js
import express from "express";
import Stripe from "stripe";
import process from "node:process";
import User from "../models/userModel.js";
import admin from "firebase-admin";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware to verify Firebase token
const verifyFirebaseToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing token" });
    }

    const idToken = authHeader.split("Bearer ")[1];
    const decoded = await admin.auth().verifyIdToken(idToken);

    req.firebaseUid = decoded.uid;
    next();
  } catch (err) {
    console.error("[Auth] Invalid token:", err.message);
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Create Stripe Checkout Session
router.post(
  "/create-checkout-session",
  verifyFirebaseToken,
  async (req, res) => {
    try {
      const { priceId, successUrl, cancelUrl } = req.body;

      if (!priceId || !successUrl || !cancelUrl) {
        return res.status(400).json({ error: "Missing checkout details" });
      }

      const user = await User.findOne(
        { firebaseUid: req.firebaseUid },
        { email: 1 }
      );

      if (!user?.email) {
        return res.status(404).json({ error: "User email not found" });
      }

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        client_reference_id: req.firebaseUid,
        customer_email: user.email,
        success_url: successUrl,
        cancel_url: cancelUrl,
      });

      return res.json({ url: session.url });
    } catch (error) {
      console.error("Checkout session error:", error);
      return res.status(500).json({
        error: "Failed to create checkout session",
      });
    }
  }
);

// Get user subscription status and admin status
router.get(
  "/users/:uid/subscription-status",
  verifyFirebaseToken,
  async (req, res) => {
    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("Surrogate-Control", "no-store");

    try {
      const { uid } = req.params;

      if (!uid) {
        return res.status(400).json({ error: "User ID is required" });
      }

      if (req.firebaseUid !== uid) {
        return res.status(403).json({ error: "Unauthorized access" });
      }

      const user = await User.findOne(
        { firebaseUid: uid },
        { subscriptionStatus: 1, isAdmin: 1, _id: 0 }
      );

      const response = {
        subscriptionStatus: user?.subscriptionStatus || "not_subscribed",
        isAdmin: user?.isAdmin || false,
      };

      return res.json(response);
    } catch (error) {
      console.error("Error fetching subscription status:", error);
      return res.status(500).json({
        error: "Internal server error",
        subscriptionStatus: "not_subscribed",
        isAdmin: false,
      });
    }
  }
);

router.post("/create-user", verifyFirebaseToken, async (req, res) => {
  try {
    const { firebaseUid, email, emailSubscribed } = req.body;

    if (!firebaseUid || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (req.firebaseUid !== firebaseUid) {
      return res.status(403).json({ error: "Unauthorized user creation" });
    }

    const emailLower = email.toLowerCase();
    const domain = emailLower.split("@")[1];

    const blockedEmails = [
      "haze88033@gmail.com",
      "aneesbilal03@gmail.com",
      "testuser1234@gmail.com",
    ];
    const blockedDomains = ["example.com", "bad.com"];

    if (blockedEmails.includes(emailLower) || blockedDomains.includes(domain)) {
      return res.status(403).json({
        error: "This email or domain is not allowed to register.",
      });
    }

    const user = await User.findOneAndUpdate(
      { firebaseUid },
      {
        firebaseUid,
        email: emailLower,
        emailSubscribed: emailSubscribed ?? false,
        subscriptionStatus: "not_subscribed",
        subscriptionPlan: "free",
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    return res.json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Create user error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


// Update user subscription status
router.post(
  "/users/:uid/update-subscription",
  verifyFirebaseToken,
  async (req, res) => {
    try {
      const { uid } = req.params;
      const { subscriptionStatus } = req.body;

      if (!uid || !subscriptionStatus) {
        return res.status(400).json({
          error: "User ID and subscription status required",
        });
      }

      if (req.firebaseUid !== uid) {
        return res.status(403).json({ error: "Unauthorized access" });
      }

      const validStatuses = [
        "not_subscribed",
        "subscribed",
        "past_due",
        "canceled",
        "incomplete",
        "trialing",
      ];

      if (!validStatuses.includes(subscriptionStatus)) {
        return res.status(400).json({ error: "Invalid subscription status" });
      }

      const updatedUser = await User.findOneAndUpdate(
        { firebaseUid: uid },
        { $set: { subscriptionStatus } },
        { new: true, projection: { subscriptionStatus: 1, isAdmin: 1 } }
      );

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.json({
        success: true,
        subscriptionStatus: updatedUser.subscriptionStatus,
        isAdmin: updatedUser.isAdmin,
      });
    } catch (error) {
      console.error("Error updating subscription:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
  
);

export { router, verifyFirebaseToken };
