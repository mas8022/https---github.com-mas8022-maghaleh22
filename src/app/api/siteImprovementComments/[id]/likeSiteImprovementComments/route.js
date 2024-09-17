import { useRevalidatePage } from "@/utils/useRevalidatePage";
import likeModel from "@/models/like";
import { MeId } from "@/utils/me";

export async function POST(req, { params }) {
  try {
    const commentId = params.id;
    const meId = await MeId();

    const likeBefore = await likeModel.findOne({
      userLiked: meId,
      siteImprovementComment: commentId,
    });


    if (likeBefore) {
      return Response({ message: "لایک کرده بودید" });
    }

    await likeModel.create({
      userLiked: meId,
      siteImprovementComment: commentId,
    });

    useRevalidatePage();
    return Response.json({ message: "با موفقیت لایک شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
