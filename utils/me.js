import { cookies } from "next/headers";
import userModel from "../models/user";
import connectToDb from "../configs/db";
import { verifyToken } from "./authTools";

async function Me() {
  connectToDb();
  const token = cookies().get("token")?.value;
  const tokenPayload = verifyToken(token, process.env.privateKey);
  const user = await userModel.findOne(
    {
      $or: [
        { email: tokenPayload?.email },
        { email: tokenPayload?.email.email },
      ],
    },
    "-__v"
  );
  if (user) {
    return user;
  } else {
    return null;
  }
}

async function MeId() {
  try {
    connectToDb();
    const token = cookies().get("token")?.value;
    const tokenPayload = verifyToken(token, process.env.privateKey);
    if (!tokenPayload) {
      return false;
    }

    const userId = await userModel.findOne(
      {
        $or: [
          { email: tokenPayload?.email },
          { email: tokenPayload?.email.email },
        ],
      },
      "_id"
    );

    if (userId) {
      return userId;
    } else {
      return false;
    }
    
  } catch (error) {
    return false;
  }
}
async function isMe() {
  try {
    connectToDb();
    const token = cookies().get("token")?.value;
    const tokenPayload = verifyToken(token, process.env.privateKey);
    if (!tokenPayload) {
      return false;
    }

    const user = await userModel.findOne(
      {
        $or: [
          { email: tokenPayload?.email },
          { email: tokenPayload?.email.email },
        ],
      },
      "_id"
    );

    if (user) {
      return true;
    } else {
      return false;
    }
    
  } catch (error) {
    return false;
  }
}

export { Me, isMe, MeId };
