import { cookies } from "next/headers";
import userModel from "@/models/user";
import connectToDb from "@/configs/db";
import { verifyToken } from "./auth";

async function Me() {
  connectToDb();
  const token = cookies().get("token")?.value;
  const tokenPayload = verifyToken(token);
  const user = await userModel.findOne({ email: tokenPayload?.email }, "-__v");
  if (user) {
    return user;
  } else {
    return null;
  }
}

async function isMe() {
  connectToDb();
  const token = cookies().get("token")?.value;
  const tokenPayload = verifyToken(token);
  const user = await userModel.findOne({ email: tokenPayload?.email }, "_id");
  if (user) {
    return user;
  } else {
    return null;
  }
}

export { Me, isMe };
