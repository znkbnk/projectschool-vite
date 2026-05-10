const User = require("../models/userModel");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = import.meta.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected for data insertion"))
  .catch((err) => console.error("MongoDB connection error:", err));

const insertSampleData = async () => {
  try {
    await User.create([
      {
        firebaseUid: "sampleUid1",
        subscriptionStatus: "subscribed",
        subscriptionId: "stripe_subscription_id_1",
      },
      {
        firebaseUid: "sampleUid2",
        subscriptionStatus: "not_subscribed",
      },
    ]);

    console.log("Sample data inserted successfully");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    mongoose.disconnect();
  }
};

insertSampleData();
