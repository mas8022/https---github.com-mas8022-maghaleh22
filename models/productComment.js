import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    commenter: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commenterText: {
      type: String,
      required: true,
    },
    publish: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models?.ProductComment || mongoose.model("ProductComment", schema);

export default model;
