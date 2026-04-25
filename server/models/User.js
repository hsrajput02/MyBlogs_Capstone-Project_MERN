import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  gender: String,
  age: Number,

  address: {
    line1: String,
    city: String,
    country: String
  }

}, { timestamps: true });

export default mongoose.model("User", userSchema);