import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  masterName: {
    type: String,
    required: true,
  },
  masterEmail: {
    type: String,
    required: true,
  },
  masterPhone: {
    type: String,
    required: true,
  },
  masterPassword: {
    type: String,
    required: true,
  },
  masterObligation: {
    type: String,
    required: true,
  },
  masterJob: {
    type: String,
    required: true,
  },
  masterBio: {
    type: String,
    required: true,
  },
  masterProfile: {
    type: String,
  },
});

const model = mongoose.models?.Master || mongoose.model("Master", schema);

export default model;
