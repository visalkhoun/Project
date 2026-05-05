import mongoose from "mongoose";
import User from "../../models/User.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("User route is working");
  }

  if (req.method === "POST") {
    try {
      // connect to MongoDB
      if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
      }

      console.log("Incoming data:", req.body);

      const user = new User(req.body);
      const savedUser = await user.save();

      return res.status(201).json({
        message: "Data saved successfully",
        data: savedUser,
      });

    } catch (err) {
      console.error("Error saving data:", err);

      return res.status(500).json({
        message: "Error saving data",
        error: err.message,
      });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}