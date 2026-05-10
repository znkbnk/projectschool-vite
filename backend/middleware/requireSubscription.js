// middleware/requireSubscription.js
import User from "../models/userModel.js";

const requireSubscription = async (req, res, next) => {
  try {
    // verifyFirebaseToken must run before this middleware
    if (!req.firebaseUid) {
      return res.status(401).json({ 
        error: "Authentication required", 
        requiresSubscription: true 
      });
    }

    const user = await User.findOne(
      { firebaseUid: req.firebaseUid },
      { subscriptionStatus: 1 }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Allow access for subscribed or trialing users
    const hasAccess = 
      user.subscriptionStatus === "subscribed" || 
      user.subscriptionStatus === "trialing";

    if (!hasAccess) {
      return res.status(403).json({ 
        error: "Subscription required", 
        requiresSubscription: true,
        currentStatus: user.subscriptionStatus 
      });
    }

    // Attach subscription info to request
    req.subscriptionStatus = user.subscriptionStatus;
    next();
  } catch (error) {
    console.error("[requireSubscription] Error:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default requireSubscription;