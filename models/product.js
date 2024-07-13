import mongoose, { Schema } from "mongoose";

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
  videoTime: {
    type: Number,
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
    type: boolean,
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
});

const model = mongoose.models?.Course || mongoose.model("Course", schema);

export default model;
