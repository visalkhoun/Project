const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Save ANY data (no validation)
router.post("/save", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({ message: "Data saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving data" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is working");
});

module.exports = router;