

const solutionCode1 = `
// backend/models/createUser.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';  
import User from './userSchema.js'; 

dotenv.config({ path: '../.env' });

// console.log('Loaded .env file from:', process.cwd());
// console.log('MONGO_URI:', process.env.MONGO_URI);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI environment variable is missing!');
  process.exit(1); 
}

const createUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Create a test user
    const newUser = new User({
      name: 'Example name',
      email: 'email@example.com',
      password: 'my_password',
      role: 'Student',
      profilePicture: 'http://example.com/profile.jpg',
      contactNumber: '123-456-78902',
      address: '123 address3, City, Country',
      studentDetails: {
        enrolledLessons: [],
      },
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);

    // Cleanup: Remove the test user
    // await User.findByIdAndDelete(savedUser._id);
    // console.log('Test user deleted successfully');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

createUser();

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,

];






















