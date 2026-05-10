// models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  emailSubscribed: { type: Boolean, default: false },
  subscriptionStatus: {
    type: String,
    enum: ["not_subscribed", "subscribed", "past_due", "canceled", "incomplete", "trialing"],
    default: "not_subscribed",
  },
  subscriptionId: String,
  subscriptionEndDate: Date,
  currentBillingDate: Date,
  subscriptionGracePeriodEnd: Date,
  subscriptionPlan: {
    type: String,
    enum: ["monthly", "annual", "free"],
    default: "free",
  },
  trialEndDate: Date,
  paymentMethodId: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", userSchema);

export default User;