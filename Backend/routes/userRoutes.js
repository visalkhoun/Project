const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Test route (so you know the route is working)
router.get("/", (req, res) => {
  res.send("User route is working");
});

// Save ANY data
router.post("/save", async (req, res) => {
  try {
    // Debug: log incoming data (remove later in production)
    console.log("Incoming data:", req.body);

    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "Data saved successfully",
      data: savedUser,
    });

  } catch (err) {
    console.error("Error saving data:", err);

    res.status(500).json({
      message: "Error saving data",
      error: err.message,
    });
  }
});

module.exports = router;