// routes/downloadRoutes.js
import express from "express";
import admin from "firebase-admin";
import { verifyFirebaseToken } from "./userRoutes.js";
import requireSubscription from "../middleware/requireSubscription.js";

const router = express.Router();

const handleDownload = async (res, filePath, fileName) => {
  try {
    const bucket = admin.storage().bucket();
    const file = bucket.file(filePath);

    const [exists] = await file.exists();
    if (!exists) {
      console.error(`[Download] File not found: ${filePath}`);
      return res.status(404).json({ error: "File not found. Please contact support." });
    }

    const [url] = await file.getSignedUrl({
      version: "v4",
      action: "read",
      expires: Date.now() + 15 * 60 * 1000,
    });

    console.log(`[Download] ✅ Signed URL generated for ${fileName}`);
    res.json({ url });
  } catch (err) {
    console.error("[Download] ❌ Error:", err.message);
    res.status(500).json({
      error: "Failed to generate download link",
      details: err.message,
    });
  }
};

router.get("/workshop-full-code", verifyFirebaseToken, requireSubscription, async (req, res) => {
  await handleDownload(res, "downloads/workshop-full-code.zip", "workshop-full-code.zip");
});

router.get("/ecom-full-code", verifyFirebaseToken, requireSubscription, async (req, res) => {
  await handleDownload(res, "downloads/ecom-full-code.zip", "ecom-full-code.zip");
});

export default router;