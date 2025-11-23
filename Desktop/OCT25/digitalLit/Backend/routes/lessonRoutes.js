import express from "express";
import Lesson from "../models/Lesson.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get lessons
router.get("/", async (req, res) => {
  const lessons = await Lesson.find();
  res.json(lessons);
});

// Add new lesson (admin or user)
router.post("/", protect, async (req, res) => {
  const lesson = await Lesson.create(req.body);
  res.json(lesson);
});

export default router;
