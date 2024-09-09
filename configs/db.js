import mongoose from "mongoose";

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      mongoose.connect(
        "mongodb://root:eNLx53XD5qqNBdm3uchTEkq4@fitz-roy.liara.cloud:32074/my-app?authSource=admin"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to db" });
  }
}

export default connectToDb;
