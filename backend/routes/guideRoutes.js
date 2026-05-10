// routes/guideRoutes.js
import express from "express";
import { verifyFirebaseToken } from "./userRoutes.js";
import User from "../models/userModel.js";

const router = express.Router();

const PREMIUM_GUIDE_SLUGS = new Set([
  "usestate", "useeffect", "stateeffect", "reactforms", "usecontext",
  "reacttodo2", "usereducer", "customhooks", "reactrouter", "datafetching"
]);

const FREE_GUIDE_SLUGS = new Set([
  "jstoreact", "reactintro", "componentsprops", "reacttodo"
]);

router.get("/guides/:slug/access", verifyFirebaseToken, async (req, res) => {
  const { slug } = req.params;

  if (FREE_GUIDE_SLUGS.has(slug)) {
    return res.json({ access: true, reason: "free" });
  }

  if (!PREMIUM_GUIDE_SLUGS.has(slug)) {
    return res.status(404).json({ error: "Guide not found" });
  }

  const user = await User.findOne(
    { firebaseUid: req.firebaseUid },
    { subscriptionStatus: 1 }
  );

  const hasAccess = user?.subscriptionStatus === "subscribed" ||
                    user?.subscriptionStatus === "trialing";

  return res.json({
    access: hasAccess,
    reason: hasAccess ? "subscribed" : "subscription_required",
  });
});

export default router;