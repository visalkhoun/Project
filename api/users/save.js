import mongoose from "mongoose";
import User from "../../Backend/models/User.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    const user = new User(req.body);
    await user.save();

    res.status(200).json({ message: "Data saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving data" });
  }
}