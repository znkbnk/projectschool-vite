const solutionCode1 = `
// backend/odels/blogPostSchema.js

import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tags: [String], // ["music", "piano", "lessons"]
    published: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  }, { timestamps: true });
  
  export default mongoose.model('BlogPost', blogPostSchema);
  
`;

const solutionCode2 = `
// backend/models/lessonScheduleSchema.js

import mongoose from 'mongoose';

const lessonScheduleSchema = new mongoose.Schema({
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lessonType: { type: String, required: true }, //  "piano", "viol;in"
    date: { type: Date, required: true },
    time: { type: String, required: true }, //  "2:00 PM"
    location: { type: String }, //  link or physical location
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' },
  }, { timestamps: true });
  
  export default mongoose.model('LessonSchedule', lessonScheduleSchema);
  
`;
const solutionCode3 = `
// backend/models/messageSchema.js

import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    sentAt: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  export default mongoose.model('Message', messageSchema);
  
`;
const solutionCode4 = `
// backend/models/paymentSchema.js

import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['Credit Card', 'PayPal', 'Bank Transfer'], required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    transactionId: { type: String }, // unique transaction id
    date: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  export default mongoose.model('Payment', paymentSchema);
  
`;
const solutionCode5 = `
// backend/models/testimonialSchema.js

import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 }, 
    approved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  export default mongoose.model('Testimonial', testimonialSchema);
  
`;
const solutionCode6 = `
// backend/models/userSchema.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Teacher', 'Admin'], required: true },
  profilePicture: { type: String },
  contactNumber: { type: String },
  address: { type: String },
  teacherDetails: {
    bio: { type: String },
    expertise: [String], //  ["piano", "guitar"]
    availability: [{ day: String, timeSlots: [String] }], // [{ day: "monday", timeSlots: ["10:00 AM", "2:00 PM"] }]
  },
  studentDetails: {
    enrolledLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
 
];
