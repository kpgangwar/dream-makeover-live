// // backend/db.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB Connected Successfully!");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error.message);
//   }
// };

// export default connectDB;



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// -------------------- DATABASE --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));


// -------------------- SCHEMA & MODEL --------------------
const ratingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stars: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String },
  date: { type: Date, default: Date.now },
});

const Rating = mongoose.model("Rating", ratingSchema);


// -------------------- ROUTES --------------------

// Default Route
app.get("/", (req, res) => {
  res.send("Dream Makeover Rating Server Running...");
});

// Save rating
app.post("/api/ratings", async (req, res) => {
  try {
    const { name, stars, message } = req.body;

    if (!name || !stars) {
      return res.status(400).json({
        success: false,
        message: "Name & stars are required",
      });
    }

    const rating = new Rating({ name, stars, message });
    await rating.save();

    res.json({
      success: true,
      message: "⭐ Rating submitted successfully!",
    });
  } catch (error) {
    console.error("Save Rating Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Try again!",
    });
  }
});

// Get all ratings
app.get("/api/ratings", async (req, res) => {
  try {
    const ratings = await Rating.find().sort({ date: -1 });
    res.json(ratings);
  } catch (error) {
    console.error("Fetch Ratings Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch ratings",
    });
  }
});


// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
