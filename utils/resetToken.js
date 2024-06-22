import { cookies } from "next/headers";
import verifyRefreshToken from "./authTools";
import { redirect } from "next/navigation";
import userModel from "../models/user";
import { sign } from "jsonwebtoken";

async function resetToken() {
  const token = cookies().get("token")?.value;
  if (token) {
    return false;
  }
  const refreshToken = cookies().get("refresh-token")?.value;
  const refreshTokenPayLoad = verifyRefreshToken(refreshToken);

  if (!refreshTokenPayLoad) {
    return redirect("/login");
  }

  connectToDb();
  const userEmail = await userModel.findOne({ refreshToken }, "email");

  if (!userEmail) {
    return redirect("/login");
  }

  const newToken = sign({ ...userEmail }, process.env.privateKey, {
    expiresIn: "60s",
  });

  return Response.json(
    { message: "reset the token" },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${newToken};path=/;httpOnly=true;`,
      },
    }
  );
}

export default resetToken;
