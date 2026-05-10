var e=[`
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/userSchema.js';
import LessonSchedule from './models/lessonScheduleSchema.js';
import BlogPost from './models/blogPostSchema.js';
import Message from './models/messageSchema.js';
import Payment from './models/paymentSchema.js';
import Testimonial from './models/testimonialSchema.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

// Clear existing data
const clearData = async () => {
  await User.deleteMany({});
  await LessonSchedule.deleteMany({});
  await BlogPost.deleteMany({});
  await Message.deleteMany({});
  await Payment.deleteMany({});
  await Testimonial.deleteMany({});
  console.log('Existing data cleared.');
};

// Seed users
const seedUsers = async () => {
  const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'Admin',
      profilePicture: 'https://example.com/admin.jpg',
      contactNumber: '+1234567890',
      address: '123 Admin Street, City, Country',
    },
    {
      name: 'Student One',
      email: 'student@example.com',
      password: 'student123',
      role: 'Student',
      profilePicture: 'https://example.com/student.jpg',
      contactNumber: '+0987654321',
      address: '456 Student Avenue, City, Country',
      studentDetails: {
        enrolledLessons: ['Piano', 'Music Theory'],
      },
    },
    {
      name: 'Teacher One',
      email: 'teacher@example.com',
      password: 'teacher123',
      role: 'Teacher',
      profilePicture: 'https://example.com/teacher.jpg',
      contactNumber: '+1122334455',
      address: '789 Teacher Road, City, Country',
      teacherDetails: {
        bio: 'Experienced piano teacher with 10+ years of experience.',
        expertise: ['Piano', 'Music Theory'],
        availability: [
          { day: 'Monday', timeSlots: ['10:00 AM', '2:00 PM'] },
          { day: 'Wednesday', timeSlots: ['11:00 AM', '3:00 PM'] },
        ],
      },
    },
  ];

  const createdUsers = await User.insertMany(users);
  console.log('Users seeded:', createdUsers);
  return createdUsers;
};

// Seed lessons
const seedLessons = async (users) => {
  const lessons = [
    {
      teacher: users[2]._id, //teacher
      student: users[1]._id, //student
      lessonType: 'Piano',
      date: new Date('2023-10-15'),
      time: '10:00 AM',
      location: 'Online (Zoom)',
      status: 'Scheduled',
    },
    {
      teacher: users[2]._id, //teacher
      student: users[1]._id, // Student
      lessonType: 'Music Theory',
      date: new Date('2023-10-17'),
      time: '2:00 PM',
      location: '123 Music School, City, Country',
      status: 'Scheduled',
    },
  ];

  const createdLessons = await LessonSchedule.insertMany(lessons);
  console.log('Lessons seeded:', createdLessons);
  return createdLessons;
};

// Seed blog posts
const seedBlogPosts = async (users) => {
  const blogPosts = [
    {
      title: '5 Tips for Learning Piano Faster',
      content: 'Here are some tips to help you master the piano quickly...',
      author: users[2]._id, //teacher
      tags: ['piano', 'music', 'tips'],
      published: true,
    },
    {
      title: 'The Importance of Music Theory',
      content: 'Understanding music theory can greatly enhance your skills...',
      author: users[2]._id, //teacher
      tags: ['music theory', 'education'],
      published: true,
    },
  ];

  const createdBlogPosts = await BlogPost.insertMany(blogPosts);
  console.log('Blog posts seeded:', createdBlogPosts);
  return createdBlogPosts;
};

// Seed messages
const seedMessages = async (users) => {
  const messages = [
    {
      sender: users[1]._id, //student
      receiver: users[2]._id, //teacher
      content: 'Hi Jane, can we reschedule our lesson?',
      isRead: false,
    },
    {
      sender: users[2]._id, //teacher
      receiver: users[1]._id, //student
      content: 'Sure, John. How about Wednesday at 3:00 PM?',
      isRead: false,
    },
  ];

  const createdMessages = await Message.insertMany(messages);
  console.log('Messages seeded:', createdMessages);
  return createdMessages;
};

// Seed payments
const seedPayments = async (users) => {
  const payments = [
    {
      user: users[1]._id, //student
      amount: 50,
      method: 'Credit Card',
      status: 'Completed',
      transactionId: 'txn_123456789',
    },
    {
      user: users[1]._id, //student
      amount: 50,
      method: 'PayPal',
      status: 'Pending',
      transactionId: 'txn_987654321',
    },
  ];

  const createdPayments = await Payment.insertMany(payments);
  console.log('Payments seeded:', createdPayments);
  return createdPayments;
};

// Seed testimonials
const seedTestimonials = async (users) => {
  const testimonials = [
    {
      user: users[1]._id, //student
      content: 'Jane is an amazing teacher! I learned so much in just a few weeks.',
      rating: 5,
      approved: true,
    },
    {
      user: users[1]._id, //student
      content: 'The lessons are very well-structured and easy to follow.',
      rating: 4,
      approved: false,
    },
  ];

  const createdTestimonials = await Testimonial.insertMany(testimonials);
  console.log('Testimonials seeded:', createdTestimonials);
  return createdTestimonials;
};

// Run the seed script
const seed = async () => {
  try {
    await clearData();
    const users = await seedUsers();
    const lessons = await seedLessons(users);
    await seedBlogPosts(users);
    await seedMessages(users);
    await seedPayments(users, lessons);
    await seedTestimonials(users);
    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seed();
`];export{e as default};
//# sourceMappingURL=day23-CiwaU1DB.js.map