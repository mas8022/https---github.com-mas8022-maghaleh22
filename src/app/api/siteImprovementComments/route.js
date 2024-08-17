import { MeId } from "../../../../utils/me";
import siteImprovementCommentModel from "../../../../models/siteImprovementComments";
export async function POST(req) {
  try {
    const meId = await MeId();

    if (!meId) {
      return Response.json({
        message: "برای ارسال نظر باید در سایت ثبت نام کرده باشید",
        status: 401,
      });
    }

    const { comment } = await req.json();
    await siteImprovementCommentModel.create({
      user: meId,
      comment,
      publish: false,
      like: 0,
      disLike: 0,
    });

    return Response.json({
      message:
        "ممنون از نظر شما! هدف ما همیشه بهبود خدمات و رضایت شماست. اگر نکته‌ای برای بهبود دارید، لطفاً با ما در میان بگذارید",
      status: 201,
    });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
