import mongoose, { Schema } from "mongoose";
import "@/models/user";

const schema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
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
      default: false,
    },
    like: {
      type: Number,
      required: true,
      default: 0,
    },
    disLike: {
      type: Number,
      required: true,
      default: 0,
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
