import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  level: String,
  language: { type: String, default: "en" }
});

export default mongoose.model("Lesson", lessonSchema);
