import { fileURLToPath } from 'url';
import { dirname } from 'path';
import process from 'node:process';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import fs from 'fs';
import path from 'path';
import admin from 'firebase-admin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

/* ------------------------------------------------------------------
   1. Initialize Firebase Admin
   ------------------------------------------------------------------ */
let serviceAccount;
const localKeyPath = path.resolve(__dirname, "firebase-admin-sdk.json");

if (fs.existsSync(localKeyPath)) {
  try {
    serviceAccount = JSON.parse(fs.readFileSync(localKeyPath, "utf8"));
    console.log("✓ Firebase Admin: loaded from local file");
  } catch (e) {
    console.error("✗ Failed to read firebase-admin-sdk.json:", e.message);
    process.exit(1);
  }
} else if (process.env.FIREBASE_ADMIN_KEY) {
  try {
    serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);
    console.log("✓ Firebase Admin: loaded from environment variable");
  } catch (e) {
    console.error("✗ Invalid JSON in FIREBASE_ADMIN_KEY:", e.message);
    process.exit(1);
  }
} else {
  console.error("✗ Firebase Admin credentials not found");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: `projectschool-48842.firebasestorage.app`,
});

/* ------------------------------------------------------------------
   2. Dynamic Route Imports
   ------------------------------------------------------------------ */
const webhookRouter = (await import("./routes/webhook.js")).default;

const userRoutesModule = await import("./routes/userRoutes.js");
const { router: userRoutes } = userRoutesModule.default || userRoutesModule;

const downloadRoutes = (await import("./routes/downloadRoutes.js")).default;

const guideRoutesModule = await import("./routes/guideRoutes.js");
const guideRoutes = guideRoutesModule.default || guideRoutesModule;

/* ------------------------------------------------------------------
   3. CORS
   ------------------------------------------------------------------ */
const allowedOrigins = [
  "https://projectschool.dev",
  "https://www.projectschool.dev",
];

if (process.env.NODE_ENV !== "production") {
  allowedOrigins.push("http://localhost:3000");
}

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("⚠ CORS blocked:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  maxAge: 86400,
};

/* ------------------------------------------------------------------
   4. Middleware
   ------------------------------------------------------------------ */
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

app.use((req, res, next) => {
  res.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
  res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  next();
});

app.use((req, res, next) => {
  const isStaticAsset = /\.(js|css|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|ico)$/i.test(req.url);
  if (isStaticAsset) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  } else {
    res.setHeader("Cache-Control", "no-cache, must-revalidate");
  }
  next();
});

app.use("/webhook", webhookRouter);

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

/* ------------------------------------------------------------------
   5. MongoDB
   ------------------------------------------------------------------ */
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })
    .then(() => console.log("✓ MongoDB connected"))
    .catch((err) => {
      console.error("✗ MongoDB connection error:", err.message);
      process.exit(1);
    });
}

/* ------------------------------------------------------------------
   6. Routes
   ------------------------------------------------------------------ */
app.use("/api", userRoutes);
app.use("/api/code", downloadRoutes);
app.use("/api", guideRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

/* ------------------------------------------------------------------
   7. Error Handlers
   ------------------------------------------------------------------ */
app.use((req, res) => {
  res.status(404).json({ error: "Route not found", path: req.path });
});

app.use((err, req, res) => {
  console.error("Error:", err.message || err);

  const errorMessage = process.env.NODE_ENV === "production"
    ? "Internal Server Error"
    : err.message;

  res.status(err.status || 500).json({
    error: errorMessage,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

/* ------------------------------------------------------------------
   8. Graceful Shutdown
   ------------------------------------------------------------------ */
process.on("SIGTERM", () => {
  console.log("SIGTERM received, closing server gracefully");
  mongoose.connection.close(false, () => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});

/* ------------------------------------------------------------------
   9. Start Server
   ------------------------------------------------------------------ */
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`✓ Allowed origins: ${allowedOrigins.join(", ")}`);
});

server.on("error", (error) => {
  console.error("✗ Server error:", error);
  process.exit(1);
});

export default app;