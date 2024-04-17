import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  _id: String,
  name: { type: String, required: true },
  description: { type: String, required: true },
  course: { type: String, required: true },
  lessons: {
    type: Array,
    default: [],
  },
});

export default moduleSchema;
