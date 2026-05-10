// backend/scripts/checkGracePeriods.js
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/userModel");

async function run() {
  console.log("Starting grace period check...", new Date().toISOString());
  
  try {
    await mongoose.connect(import.meta.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const expiredUsers = await User.find({
      subscriptionStatus: "past_due",
      subscriptionGracePeriodEnd: { $lt: new Date() }
    });

    console.log(`Found ${expiredUsers.length} expired grace periods`);

    for (const user of expiredUsers) {
      await User.findByIdAndUpdate(user._id, {
        subscriptionStatus: "not_subscribed",
        subscriptionId: null,
        subscriptionGracePeriodEnd: null,
        subscriptionPlan: "free"
      });
      console.log(`Canceled subscription for: ${user.email}`);
    }

    console.log("Grace period check complete");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();