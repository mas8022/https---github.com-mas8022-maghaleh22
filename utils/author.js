import { cookies } from "next/headers";
import connectToDb from "../configs/db";
import authorModel from "../models/author";
import { verifyToken } from "./authTools";
async function isAuthor() {
  try {
    const token = cookies().get("author-token")?.value;


    const tokenPayload = verifyToken(token, process.env.authorPrivateKey);
    if (!tokenPayload) {
      return false;
    }

    connectToDb();
    const author = await authorModel.findOne(
      { $or: [
        {email: tokenPayload.email },
        {email: tokenPayload.email.email },
      ] },
      "_id"
    );

    


    if (author) {
      console.log("yes");
      return true;
    } else {
      console.log("no");

      return false;
    }
  } catch (error) {
    return false;
  }
}

export { isAuthor };
