



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// 🌸 Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🧩 Middleware
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));



// 🌟 Rating Schema & Model
const ratingSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  stars: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, trim: true },
  date: { type: Date, default: Date.now },
});

const Rating = mongoose.model("Rating", ratingSchema);

// 🏠 Default Route
app.get("/", (req, res) => {
  res.send("🌸 Dream Makeover Rating Server Running 💅");
});

// ⭐ POST: Save new rating (Client → Server)
app.post("/api/ratings", async (req, res) => {
  try {
    const { name, stars, message } = req.body;

    if (!name || !stars) {
      return res
        .status(400)
        .json({ success: false, message: "⚠️ Name and stars are required." });
    }

    const newRating = new Rating({ name, stars, message });
    await newRating.save();

    res.status(201).json({
      success: true,
      message: "⭐ Thank you for your feedback!",
    });
  } catch (error) {
    console.error("❌ Error saving rating:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while saving rating." });
  }
});

// 🌸 GET: Fetch all ratings (Admin / Client view)
app.get("/api/ratings", async (req, res) => {
  try {
    const ratings = await Rating.find().sort({ date: -1 });
    res.status(200).json(ratings);
  } catch (error) {
    console.error("❌ Error fetching ratings:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while fetching ratings." });
  }
});

// 💖 Start Server
app.listen(PORT, () => {
  console.log(`💖 Server running on http://localhost:${PORT}`);
});