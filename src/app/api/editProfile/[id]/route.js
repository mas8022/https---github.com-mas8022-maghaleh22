import connectToDb from "../../../../../configs/db";
import userModel from "../../../../../models/user";
import { generateToken } from "../../../../../utils/authTools";

export async function POST(req, { params }) {
  try {
    connectToDb();
    const { fullName, email, phone } = await req.json();

    await userModel.findOneAndUpdate({ email }, { fullName, email, phone });
    const newAccessToken = generateToken({ email }, process.env.privateKey);

    return Response.json(
      { Message: "edit user successfully" },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${newAccessToken};path=/;httpOnly=true;`,
        },
      }
    );
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید" }, { status: 500 });
  }
}
