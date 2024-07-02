import connectToDb from "../../../../configs/db";
import userModel from "../../../../models/user";
import { sign } from "jsonwebtoken";
import { generateToken, verifyPassword } from "../../../../utils/authTools";

export async function POST(req) {
  try {
    connectToDb();
    const { email, password } = await req.json();

    const user = await userModel.findOne({ email });
    if (!user) {
      return Response.json({ Message: "email not found" }, { status: 401 });
    }

    const isValidPassword = verifyPassword(password, user.password);
    if (!isValidPassword) {
      return Response.json({ Message: "password not found" }, { status: 402 });
    }

    const refreshToken = sign({ email }, process.env.refreshPrivateKey);

    await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );

    const newAccessToken = generateToken({ email });

    cookies().set("token", token, {
      httpOnly: true,
      path: "/",
      expires: new Date().getTime() + 60000,
    });
    cookies().set("refresh-token", newAccessToken, {
      httpOnly: true,
      path: "/",
      expires: (new Date().getTime() + 60000) * 60 * 24 * 15,
    });

    return Response.json(
      { message: "signup successfully" },
      {
        status: 201,
      }
    );

    return Response.json(
      { Message: "login successfully" },
      { status: 200, headers }
    );
  } catch (error) {
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
