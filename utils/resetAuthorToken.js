import { cookies } from "next/headers";
import { generateToken, verifyRefreshToken, verifyAuthorToken } from "./authTools";
import { redirect } from "next/navigation";
import connectToDb from "../configs/db";
import authorModel from "../models/author";

async function ResetAuthorToken() {
  const token = cookies().get("author-token")?.value;
  if (token) {
    const validationToken = verifyRefreshToken(token, process.env.authorPrivateKey);
    if (validationToken) {
      return true;
    }
  }

  const refreshToken = cookies().get("author-refresh-token")?.value;
  if (!refreshToken) {
    return redirect("/login");
  }

  const refreshTokenPayLoad = verifyRefreshToken(refreshToken, process.env.authorRefreshPrivateKey);
  if (!refreshTokenPayLoad) {
    return redirect("/login");
  }

  await connectToDb();
  const userEmail = await authorModel.findOne({ refreshToken }, "email");

  if (!userEmail) {
    return redirect("/login");
  }

  const newToken = generateToken({ userEmail });

  await cookies().delete("author-token");

  cookies().set("author-token", newToken, {
    httpOnly: true,
    path: "/",
  });
}

export default ResetAuthorToken;
