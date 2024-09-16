import mongoose from "mongoose";

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      mongoose.connect(
        "mongodb://root:1utaXT2eKDRKsttwbxyOOufW@tirich-mir.liara.cloud:30274/my-app?authSource=admin&replicaSet=rs0&directConnection=true"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to db" });
  }
}

export default connectToDb;
