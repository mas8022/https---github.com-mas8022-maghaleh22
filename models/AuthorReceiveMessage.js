import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  seen: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const model =
  mongoose.models?.AuthorReceiveMessage ||
  mongoose.model("AuthorReceiveMessage", schema);

export default model;
