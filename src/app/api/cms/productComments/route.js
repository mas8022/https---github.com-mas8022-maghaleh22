import connectToDb from "@/configs/db";
import commentModel from "@/models/productComment";

export async function GET() {
  try {
    connectToDb();
    const comments = await commentModel
      .find({ publish: false }, "commenterText")
      .lean();

    return Response.json(comments);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
