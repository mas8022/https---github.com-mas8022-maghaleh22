import { cookies } from "next/headers";
import { verifyRefreshToken, generateToken } from "./authTools";
import { redirect } from "next/navigation";
import userModel from "../models/user";
import connectToDb from "@/configs/db";

async function resetToken() {
  
  const refreshToken = cookies().get("refresh-token")?.value;
  if (!refreshToken) {
    return redirect("/login");
  }

  const refreshTokenPayLoad = verifyRefreshToken(refreshToken);
  if (!refreshTokenPayLoad) {
    return redirect("/login");
  }

  await connectToDb();
  const userEmail = await userModel.findOne({ refreshToken }, "email");

  if (!userEmail) {
    return redirect("/login");
  }

  const newToken = generateToken({ userEmail });

  await cookies().delete("token");

  cookies().set("token", newToken, {
    httpOnly: true,
    path: "/",
  });
}

export default resetToken;
