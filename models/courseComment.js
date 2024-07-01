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
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models?.CourseComment || mongoose.model("CourseComment", schema);

export default model;
