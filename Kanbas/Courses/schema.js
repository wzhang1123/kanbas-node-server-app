import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses", versionKey: false }
);

export default courseSchema;
