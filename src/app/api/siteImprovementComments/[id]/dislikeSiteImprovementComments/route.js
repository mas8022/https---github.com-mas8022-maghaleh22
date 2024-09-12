import mongoose from "mongoose";
import siteImprovementCommentModel from "@/models/siteImprovementComments";
import connectToDb from "@/configs/db";
import { revalidatePath } from "next/cache";

export async function POST(req, { params }) {
  try {
    const { disLikeCount } = await req.json();

    connectToDb();
    await siteImprovementCommentModel.findOneAndUpdate(
      { _id: params.id },
      { disLike: disLikeCount }
    );

    revalidatePath("/", "layout");
    
    return Response.json({ message: "با موفقیت دیس لایک شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
