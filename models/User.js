import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Prevent model overwrite error in serverless
export default mongoose.models.User || mongoose.model("User", userSchema);