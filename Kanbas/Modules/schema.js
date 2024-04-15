import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  course: String,
  lessons: Array,
});

export default moduleSchema;
