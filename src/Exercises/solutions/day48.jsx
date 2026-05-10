const solutionCode1 = `
// backend/models/lessonScheduleSchema.js

import mongoose from "mongoose";

const lessonScheduleSchema = new mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    lessonType: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String },
    status: {
      type: String,
      enum: ["Scheduled", "Completed", "Cancelled"],
      default: "Scheduled",
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
      default: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      default: 50,
    },
  },
  { timestamps: true }
);

export default mongoose.model("LessonSchedule", lessonScheduleSchema);

`;

const solutionCode2 = `
// backend/models/paymentSchema.js

import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    method: {
      type: String,
      enum: ["Credit Card", "PayPal", "Bank Transfer"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
    },
    transactionId: { type: String }, // unique transaction id
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);

`;
const solutionCode3 = `
// backend/routes/authRoutes.js

import express from "express";
import bcrypt from "bcryptjs";
import validator from "validator";
import User from "../models/userSchema.js";
import { protect } from "../middleware/authMiddleware.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

// Password strength validation function
const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return "Password must be at least 8 characters long";
  }
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
    return "Password must include uppercase, lowercase, numbers, and special characters";
  }
  return null;
};

// Register user
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Validate inputs
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      return res.status(400).json({ message: passwordError });
    }

    if (!["Student", "Teacher"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Hardcoded for local development/ change for production
      sameSite: "lax", // Hardcoded for local development/ and this one
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate inputs
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Hardcoded for local development
      sameSite: "lax", // Hardcoded for local development
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Logout user
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // Hardcoded for local development
    sameSite: "lax", // Hardcoded for local development
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// Get authenticated user info
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Update profile
router.put("/profile", protect, async (req, res) => {
  try {
    const {
      name,
      profilePicture,
      contactNumber,
      address,
      teacherDetails,
      studentDetails,
    } = req.body;

    // Validate inputs
    if (name && typeof name !== "string") {
      return res.status(400).json({ message: "Invalid name format" });
    }
    if (
      profilePicture &&
      !validator.isURL(profilePicture, { require_protocol: false })
    ) {
      return res.status(400).json({ message: "Invalid profile picture URL" });
    }
    if (contactNumber && !validator.isMobilePhone(contactNumber, "any")) {
      return res.status(400).json({ message: "Invalid contact number" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.profilePicture = profilePicture || user.profilePicture;
    user.contactNumber = contactNumber || user.contactNumber;
    user.address = address || user.address;

    if (user.role === "Teacher" && teacherDetails) {
      user.teacherDetails = teacherDetails;
    }
    if (user.role === "Student" && studentDetails) {
      user.studentDetails = studentDetails;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

export default router;

`;
const solutionCode4 = `
// backend/routes/lessonRoutes.js

import express from "express";
import LessonSchedule from "../models/lessonScheduleSchema.js";
import User from "../models/userSchema.js";
import Message from "../models/messageSchema.js";
import Payment from "../models/paymentSchema.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { teacher, date, status, student } = req.query;

    let filter = {};

    if (teacher) {
      filter.teacher = teacher;
    }

    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setUTCHours(23, 59, 59, 999);
      filter.date = { $gte: startOfDay, $lte: endOfDay };
    }

    if (status) {
      filter.status = status;
    }

    if (student) {
      filter.students = student;
    }

    const lessons = await LessonSchedule.find(filter)
    .populate("teacher", "name email")
    .populate({
      path: "students",
      select: "name email _id",
      match: { _id: { $exists: true } },
    })
    .sort({ date: 1, time: 1 });

    res.json(lessons);
  } catch (error) {
    console.error("Error fetching lessons:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const lesson = await LessonSchedule.findById(req.params.id)
      .populate("teacher", "name email")
      .populate("students", "name email");
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (error) {
    console.error("Error fetching lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/", protect, admin, async (req, res) => {
  const { teacher, lessonType, date, time, location, status, capacity, price } =
    req.body;

  try {
    console.log("Creating lesson with payload:", req.body);

    const teacherData = await User.findById(teacher);
    if (!teacherData || teacherData.role !== "Teacher") {
      return res.status(400).json({ message: "Invalid teacher" });
    }

    const availability = teacherData.teacherDetails?.availability || [];

    if (!date || !time) {
      return res.status(400).json({ message: "Date and time are required" });
    }

    const lessonDateTime = new Date(\`\${date} \${time}\`);
    if (isNaN(lessonDateTime.getTime())) {
      console.log("Invalid lessonDateTime:", \`\${date} \${time}\`);
      return res.status(400).json({ message: "Invalid date or time format" });
    }

    const lessonDateStr = lessonDateTime.toISOString().split("T")[0];
    const lessonTime = time;

    const isAvailable = availability.some((slot) => {
      if (!slot.date) {
        console.log("Slot missing date:", slot);
        return false;
      }
      const slotDate = new Date(slot.date);
      return (
        slotDate.toISOString().split("T")[0] === lessonDateStr &&
        slot.timeSlots.includes(lessonTime)
      );
    });

    if (!isAvailable) {
      return res.status(400).json({
        message: \`Teacher is not available on \${lessonDateTime.toLocaleDateString(
          "en-US",
          { month: "long", day: "numeric", year: "numeric" }
        )} at \${lessonTime}\`,
      });
    }

    const newLesson = new LessonSchedule({
      teacher,
      students: [],
      lessonType,
      date,
      time,
      location,
      status,
      capacity: capacity || 10,
      price: price || 50,
    });

    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    console.error("Error creating lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/book/:id", protect, async (req, res) => {
  if (req.user.role !== "Student") {
    return res.status(403).json({ message: "Only students can book lessons" });
  }

  try {
    const lesson = await LessonSchedule.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    console.log(
      "Attempting to book lesson:",
      lesson._id,
      "for user:",
      req.user._id
    );

    if (lesson.students.length >= (lesson.capacity || 10)) {
      return res.status(400).json({ message: "This lesson is already full" });
    }

    if (
      lesson.students.some(
        (student) => student.toString() === req.user._id.toString()
      )
    ) {
      console.log("User already booked lesson:", lesson._id);
      return res.status(200).json(lesson);
    }

    const payment = await Payment.findOne({
      user: req.user._id,
      lessonId: req.params.id,
      status: "Completed",
    });

    if (!payment) {
      return res
        .status(400)
        .json({ message: "No completed payment found for this lesson" });
    }

    lesson.students.push(req.user._id);
    await lesson.save();

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $addToSet: { "studentDetails.enrolledLessons": lesson.lessonType } },
      { new: true }
    );

    console.log(
      "Lesson booked successfully:",
      lesson._id,
      "enrolledLessons:",
      updatedUser.studentDetails.enrolledLessons
    );
    res.json(lesson);
  } catch (error) {
    console.error("Error booking lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", protect, admin, async (req, res) => {
  const {
    teacher,
    students,
    lessonType,
    date,
    time,
    location,
    status,
    capacity,
    price,
  } = req.body;

  try {
    if (teacher || date || time) {
      const lesson = await LessonSchedule.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }

      const teacherId = teacher || lesson.teacher;
      const lessonDate = date || lesson.date;
      const lessonTime = time || lesson.time;

      const teacherData = await User.findById(teacherId);
      if (!teacherData || teacherData.role !== "Teacher") {
        return res.status(400).json({ message: "Invalid teacher" });
      }

      const lessonDateTime = new Date(\`\${lessonDate} \${lessonTime}\`);
      if (isNaN(lessonDateTime.getTime())) {
        console.log("Invalid lessonDateTime:", \`\${lessonDate} \${lessonTime}\`);
        return res.status(400).json({ message: "Invalid date or time format" });
      }

      const lessonDateStr = lessonDateTime.toISOString().split("T")[0];
      const formattedTime = lessonTime;

      const availability = teacherData.teacherDetails?.availability || [];
      const isAvailable = availability.some((slot) => {
        if (!slot.date) return false;
        const slotDate = new Date(slot.date);
        return (
          slotDate.toISOString().split("T")[0] === lessonDateStr &&
          slot.timeSlots.includes(formattedTime)
        );
      });

      if (!isAvailable) {
        return res.status(400).json({
          message: \`Teacher is not available on \${lessonDateTime.toLocaleDateString(
            "en-US",
            { month: "long", day: "numeric", year: "numeric" }
          )} at \${formattedTime}\`,
        });
      }
    }

    const updatedLesson = await LessonSchedule.findByIdAndUpdate(
      req.params.id,
      {
        teacher,
        students,
        lessonType,
        date,
        time,
        location,
        status,
        capacity,
        price,
      },
      { new: true, runValidators: true }
    )
      .populate("teacher", "name email")
      .populate("students", "name email");

    if (!updatedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json(updatedLesson);
  } catch (error) {
    console.error("Error updating lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/cancel/:id", protect, async (req, res) => {
  try {
    const lesson = await LessonSchedule.findById(req.params.id)
      .populate("teacher", "name email _id")
      .populate("students", "name email _id");

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    const isStudent = lesson.students.some(
      (student) => student._id.toString() === req.user._id.toString()
    );
    const isAdmin = req.user.role === "Admin";

    if (!isStudent && !isAdmin) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }

    const io = req.app.get("socketio");

    if (isStudent && req.user.role === "Student") {
      lesson.students = lesson.students.filter(
        (student) => student._id.toString() !== req.user._id.toString()
      );

      await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { "studentDetails.enrolledLessons": lesson.lessonType } },
        { new: true }
      );

      await lesson.save();

      if (io) {
        const notification = {
          lessonId: lesson._id,
          lessonType: lesson.lessonType,
          status: lesson.status,
          cancelledBy: "Student",
          userId: req.user._id,
          timestamp: new Date(),
        };
        io.to(lesson.teacher._id.toString()).emit("lessonUpdate", notification);
        lesson.students.forEach((student) => {
          io.to(student._id.toString()).emit("lessonUpdate", notification);
        });
        io.to(req.user._id.toString()).emit("lessonUpdate", notification);
      }

      res.json({ message: "Booking cancelled successfully", lesson });
    }

    if (isAdmin) {
      if (lesson.status === "Cancelled") {
        return res.status(400).json({ message: "Lesson is already cancelled" });
      }

      lesson.status = "Cancelled";
      await lesson.save();

      const studentIds = lesson.students.map((student) => student._id);
      const messageContent = \`The lesson "\${
        lesson.lessonType
      }" scheduled for \${new Date(lesson.date).toLocaleDateString()} at \${
        lesson.time
      } has been cancelled by the admin.\`;

      const messagePromises = studentIds.map(async (studentId) => {
        if (studentId.toString() === req.user._id.toString()) return null;

        const message = new Message({
          sender: req.user._id,
          receiver: studentId,
          content: messageContent,
        });
        await message.save();
        return Message.findById(message._id)
          .populate("sender", "name email _id")
          .populate("receiver", "name email _id");
      });

      const sentMessages = (await Promise.all(messagePromises)).filter(Boolean);

      if (io) {
        const notification = {
          lessonId: lesson._id,
          lessonType: lesson.lessonType,
          status: lesson.status,
          cancelledBy: "Admin",
          timestamp: new Date(),
        };

        io.to(lesson.teacher._id.toString()).emit("lessonUpdate", notification);

        studentIds.forEach((studentId) => {
          if (studentId.toString() !== req.user._id.toString()) {
            io.to(studentId.toString()).emit("lessonUpdate", notification);
            const message = sentMessages.find(
              (msg) => msg?.receiver._id.toString() === studentId.toString()
            );
            if (message) {
              io.to(studentId.toString()).emit("receiveMessage", message);
            }
          }
        });

        io.to(req.user._id.toString()).emit("lessonUpdate", notification);
      }

      res.json({ message: "Lesson cancelled successfully", lesson });
    }
  } catch (error) {
    console.error("Error cancelling lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const deletedLesson = await LessonSchedule.findByIdAndDelete(req.params.id);
    if (!deletedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    console.error("Error deleting lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;

`;
const solutionCode5 = `
// backend/routes/paymentRoutes.js

import express from "express";
import Stripe from "stripe";
import { protect } from "../middleware/authMiddleware.js";
import Payment from "../models/paymentSchema.js";

const router = express.Router();

const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY is not defined in environment variables");
    throw new Error(
      "STRIPE_SECRET_KEY is not defined in environment variables"
    );
  }
  console.log("Initializing Stripe with STRIPE_SECRET_KEY");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
};

router.post("/checkout", protect, async (req, res) => {
  try {
    const stripe = getStripe();
    const { lessonId, amount } = req.body;

    console.log(
      "Creating checkout session for lesson:",
      lessonId,
      "amount:",
      amount
    );

    if (!lessonId || !amount) {
      return res
        .status(400)
        .json({ message: "Lesson ID and amount are required" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Music Lesson",
              metadata: { lessonId },
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: \`\${process.env.CLIENT_URL}/services?payment=success&session_id={CHECKOUT_SESSION_ID}\`,
      cancel_url: \`\${process.env.CLIENT_URL}/services?payment=canceled\`,
      metadata: {
        userId: req.user._id.toString(),
        lessonId,
      },
    });

    console.log("Checkout session created:", session.id);
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({
      message: "Error creating checkout session",
      error: error.message,
    });
  }
});

router.post("/confirm", protect, async (req, res) => {
  try {
    const stripe = getStripe();
    const { sessionId } = req.body;

    console.log("Confirming payment for session:", sessionId);

    if (!sessionId) {
      return res.status(400).json({ message: "Session ID is required" });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    console.log(
      "Session retrieved:",
      session.payment_status,
      "metadata:",
      session.metadata
    );

    if (session.payment_status === "paid") {
      const payment = await Payment.create({
        user: session.metadata.userId,
        amount: session.amount_total / 100,
        method: "Credit Card",
        transactionId: session.payment_intent,
        status: "Completed",
        lessonId: session.metadata.lessonId,
      });

      console.log(
        "Payment recorded:",
        payment._id,
        "for lesson:",
        payment.lessonId
      );
      return res.json({ success: true, payment });
    } else {
      console.log("Payment not completed:", session.payment_status);
      return res.status(400).json({ message: "Payment not completed" });
    }
  } catch (error) {
    console.error("Error confirming payment:", error);
    res
      .status(500)
      .json({ message: "Error confirming payment", error: error.message });
  }
});

router.post("/", protect, async (req, res) => {
  try {
    const { user, amount, method, transactionId, status, lessonId } = req.body;
    const payment = new Payment({
      user: user || req.user._id,
      amount,
      method,
      transactionId,
      status: status || "Pending",
      lessonId,
    });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(400).json({ message: error.message });
  }
});

router.get("/", protect, async (req, res) => {
  try {
    const payments = await Payment.find().populate("user", "name email");
    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", protect, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (error) {
    console.error("Error fetching payment:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", protect, async (req, res) => {
  try {
    const { status } = req.body;
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (error) {
    console.error("Error updating payment:", error);
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    console.error("Error deleting payment:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
 
];
