import mongoose, { Schema } from "mongoose";
import userModel from "@/models/user";

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    publish: {
      type: Boolean,
      required: true,
    },
    like: {
      type: Number,
      required: true,
    },
    disLike: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models?.SiteImprovementComment ||
  mongoose.model("SiteImprovementComment", schema);

export default model;
