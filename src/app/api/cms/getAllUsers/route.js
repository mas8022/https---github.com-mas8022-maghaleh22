import connectToDb from "@/configs/db";
import userModel from "@/models/user";

export async function GET() {
  try {
    connectToDb();
    const users = await userModel
      .find({ roll: "USER" }, "fullName email profile")
      .sort({ _id: -1 })
      .lean();


    return Response.json(users);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
