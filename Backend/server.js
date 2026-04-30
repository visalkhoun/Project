const result = require("dotenv").config();
console.log(result);
console.log("MONGO_URI:", process.env.MONGO_URI);

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

console.log("MONGO_URI:", process.env.MONGO_URI);

// database (USE ENV VARIABLE)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// port fix for Railway
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});