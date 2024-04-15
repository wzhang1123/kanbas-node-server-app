import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    id: String,
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" }
);

export default courseSchema;
