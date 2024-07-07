import { cookies } from "next/headers";
import { verifyRefreshToken, generateToken, verifyToken } from "./authTools";
import { redirect } from "next/navigation";
import userModel from "../models/user";
import connectToDb from "@/configs/db";

async function resetToken() {
  const token = cookies().get("token")?.value;
  if (token) {
    const validationToken = verifyToken(token, process.env.privateKey);
    if (validationToken) {
      return true;
    }
  }

  const refreshToken = cookies().get("refresh-token")?.value;
  if (!refreshToken) {
    return redirect("/login");
  }

  const refreshTokenPayLoad = verifyRefreshToken(refreshToken, process.env.refreshPrivateKey);
  if (!refreshTokenPayLoad) {
    return redirect("/login");
  }

  await connectToDb();
  const email = await userModel.findOne({ refreshToken }, "email");

  if (!email) {
    return redirect("/login");
  }

  const newToken = generateToken({ email }, process.env.privateKey);

  await cookies().delete("token");

  cookies().set("token", newToken, {
    httpOnly: true,
    path: "/",
  });
}

export default resetToken;
