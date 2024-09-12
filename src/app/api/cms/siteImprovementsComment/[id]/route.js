import connectToDb from "@/configs/db";
import siteImprovementCommentModel from "@/models/siteImprovementComments";
import { revalidatePath } from "next/cache";

export async function PUT(req, { params }) {
  try {
    const commentId = params.id;
    connectToDb();
    const comments = await siteImprovementCommentModel.findOneAndUpdate(
      { _id: commentId },
      { publish: true }
    );

    revalidatePath("/", "layout");

    return Response.json({ message: "کامنت تایید شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const commentId = params.id;
    connectToDb();
    await siteImprovementCommentModel.findOneAndDelete({
      _id: commentId,
    });

    revalidatePath("/", "layout");
    
    return Response.json({ message: "کامنت حذف شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
