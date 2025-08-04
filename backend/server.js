require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

//  Updated CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173", // dev frontend
      "https://your-vercel-app.vercel.app", // vercel URL
      "https://your-netlify-app.netlify.app" // netlify URL
    ],
    credentials: true,
  })
);

app.use(express.json());

//  Connect to MongoDB
connectDB();

//  API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

//  Static folder to serve profile images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
