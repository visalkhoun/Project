const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// database
mongoose.connect("mongodb://localhost:27017/")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});