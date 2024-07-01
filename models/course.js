import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  productTitle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    default: 0,
  },
  master: {
    type: mongoose.Types.ObjectId,
    ref: "Master",
    required: true,
  },
  articleText: {
    type: String,
  },
  courseComments: {
    type: mongoose.Types.ObjectId,
    ref: "CourseComment",
  },
  tags: {
    type: [String],
    required: true,
  },
});

const model = mongoose.models?.Course || mongoose.model("Course", schema);

export default model;
