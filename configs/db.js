import mongoose from "mongoose";

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      mongoose.connect(
        "mongodb://root:9u9fk8lK21aNxA8u7qVJyNF6@fitz-roy.liara.cloud:32979/my-app?authSource=admin&replicaSet=rs0&directConnection=true"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to db" });
  }
}

export default connectToDb;
