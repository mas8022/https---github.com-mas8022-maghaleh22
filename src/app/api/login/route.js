import connectToDb from "../../../../configs/db";
import userModel from "../../../../models/user";
import {
  generateRefreshToken,
  generateToken,
  verifyPassword,
} from "../../../../utils/authTools";

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

    const refreshToken = generateRefreshToken({ email });

    await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );

    const newAccessToken = generateToken({ email });

    cookies().set("token", newAccessToken, {
      httpOnly: true,
      path: "/",
    });
    cookies().set("refresh-token", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
    });

    return Response.json(
      { message: "signup successfully" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
