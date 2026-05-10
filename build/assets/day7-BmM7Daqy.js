var e=[`
// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`,`
// backend/config/db.js

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(\`MongoDB connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  }
};

export default connectDB;

`,`
// backend/.env

MONGO_URI=mongodb+srv://username:password1@DBname.zmckm.mongodb.net/?retryWrites=true&w=majority&appName=DBname

`];export{e as default};
//# sourceMappingURL=day7-BmM7Daqy.js.map