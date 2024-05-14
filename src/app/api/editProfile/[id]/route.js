import connectToDb from "@/configs/db";
import userModel from "@/models/user";

export async function POST(req, { params }) {
  try {
    connectToDb();
    const { fullName, email, phone } = await req.json();

    await userModel.findOneAndUpdate({ email }, { fullName, email, phone });
    const newAccessToken = generateToken({ email });

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
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
