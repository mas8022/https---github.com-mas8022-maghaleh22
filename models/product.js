import mongoose, { Schema } from "mongoose";
import "@/models/author"
const schema = new Schema({
  group: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  articleText: {
    type: String,
  },
  articleVideo: {
    type: [String],
  },
  comments: {
    type: [mongoose.Types.ObjectId],
    ref: "ProductComment",
  },
  tags: {
    type: [String],
    required: true,
  },
  publish: {
    type: Boolean,
    required: true,
  },
  sellCount: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
  },
  cover: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    default: 0,
  },
});

const model = mongoose.models?.Product || mongoose.model("Product", schema);

export default model;
