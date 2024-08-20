import mongoose from "mongoose";
import siteImprovementCommentModel from "@/models/siteImprovementComments";
import connectToDb from "@/configs/db";

export async function POST(req, { params }) {
  const { likeCount } = await req.json();
  try {
    connectToDb();
    await siteImprovementCommentModel.findOneAndUpdate(
      { _id: params.id },
      { like: likeCount }
    );

    return Response.json({ message: "با موفقیت لایک شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
