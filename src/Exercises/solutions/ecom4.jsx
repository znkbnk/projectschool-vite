const solutionCode1 = `
/* eslint-disable no-undef */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const AddressSchema = new mongoose.Schema({
  label: { type: String, default: "home" }, 
  fullName: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: String,
  postalCode: String,
  country: { type: String, required: true },
  phone: String
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    index: true 
  },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ["user","admin"], default: "user" },
  addresses: [AddressSchema],
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
}, { timestamps: true });

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

userSchema.methods.comparePassword = function(candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model("User", userSchema);

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,

];
