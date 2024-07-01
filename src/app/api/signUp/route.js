import connectToDb from "../../../../configs/db";
import userModel from "../../../../models/user";
import {
  generateRefreshToken,
  generateToken,
  hashPassword,
} from "../../../../utils/authTools";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export async function POST(req) {
  try {
    connectToDb();
    const { fullName, email, password, phone, check } = await req.json();

    if (!fullName.trim() || !isNaN(fullName)) {
      return Response.json(
        { message: "نام تان را به درستی وارد کنید" },
        { status: 400 }
      );
    } else if (!emailRegex.test(email)) {
      return Response.json(
        { message: "ایمیل تان را به درستی وارد کنید" },
        { status: 401 }
      );
    } else if (password.length > 15 || password.length < 8) {
      return Response.json(
        { message: "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد" },
        { status: 402 }
      );
    } else if (isNaN(phone)) {
      return Response.json(
        { message: "شماره موبایل تان را به درستی وارد کنید" },
        { status: 403 }
      );
    } else if (!check) {
      return Response.json(
        { message: "تیک تایید قوانین سایت را بزنید" },
        { status: 403 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const token = generateToken({ email });
    const refreshToken = generateRefreshToken({ email });

    await userModel.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      check,
      refreshToken,
    });

    const headers = new Headers();
    headers.append("Set-Cookie", `token=${token};path=/;httpOnly=true;`);
    headers.append(
      "Set-Cookie",
      `refresh-token=${refreshToken};path=/;httpOnly=true;`
    );

    return Response.json(
      { message: "signup successfully" },
      {
        status: 201,
        headers,
      }
    );
  } catch (error) {

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
