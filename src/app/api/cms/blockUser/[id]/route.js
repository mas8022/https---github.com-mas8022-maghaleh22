import connectToDb from "@/configs/db";
import userModel from "@/models/user";

export async function PUT(req, { params }) {
  const userId = params.id;
  try {
    connectToDb();
    await userModel.findOneAndUpdate({ _id: userId }, { roll: "BLOCK" });

    return Response.json({ message: "کاربر بلاک شد", status: 200 });
  } catch (error) {
    console.log("====> ", error);

    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
