const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes);

//Start server
const PORT = 5000;
app.listen(PORT, "localhost", () =>
  console.log(`Server started on port ${PORT}`)
);
