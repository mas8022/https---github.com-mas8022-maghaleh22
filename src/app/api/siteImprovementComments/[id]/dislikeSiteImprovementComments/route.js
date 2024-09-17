import { useRevalidatePage } from "@/utils/useRevalidatePage";
import disLikeModel from "@/models/disLike";
import { MeId } from "@/utils/me";

export async function POST(req, { params }) {
  try {
    const commentId = params.id;
    
    const meId = await MeId();

    const likeBefore = await disLikeModel.findOne({
      userDisLiked: meId,
      siteImprovementComment: commentId,
    });

    if (likeBefore) {
      return Response({ message: "دیس لایک کرده بودید" });
    }

    await disLikeModel.create({
      userDisLiked: meId,
      siteImprovementComment: commentId,
    });

    useRevalidatePage();
    return Response.json({ message: "با موفقیت دیس لایک شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
