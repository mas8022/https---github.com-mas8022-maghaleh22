import connectToDb from "@/configs/db";
import siteImprovementCommentModel from "@/models/siteImprovementComments";

export async function GET() {
  try {
    connectToDb();
    const comments = await siteImprovementCommentModel
      .find({ publish: false }, "comment")
      .populate("user", "fullName email")
      .lean();

    return Response.json(comments);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}

