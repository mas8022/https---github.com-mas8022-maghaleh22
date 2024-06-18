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

    const refreshToken = sign({ email }, process.env.refreshPrivateKey, {
      expiresIn: "15d",
    });

    await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );

    const newAccessToken = generateToken({ email });

    const headers = new Headers();

    headers.append(
      "Set-Cookie",
      `token=${newAccessToken};path=/;httpOnly=true;`
    );
    headers.append(
      "Set-Cookie",
      `refresh-token=${refreshToken};path=/;httpOnly=true;`
    );

    return Response.json(
      { Message: "login successfully" },
      { status: 200, headers }
    );
  } catch (error) {
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
