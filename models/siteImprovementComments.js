import mongoose, { Schema } from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models?.SiteImprovementComment ||
  mongoose.model("SiteImprovementComment", schema);

export default model;
