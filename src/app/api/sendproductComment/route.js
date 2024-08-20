import { Me } from "@/utils/me";
import productCommentModel from "@/models/productComment";

export async function POST(req) {
  try {
    const me = await Me();

    if (!me) {
      return Response.json({
        message: "برای ارسال نظر ابتدا در سایت ثبت نام کنید",
        status: 404,
      });
    }

    const { comment, productId } = await req.json();

    await productCommentModel.create({
      productId,
      commenter: me._id,
      commenterText: comment,
      publish: false,
    });

    return Response.json({
      message:
        "پیام شما دریافت شد و پس از بررسی ثبت خواهد شد. از اینکه دیدگاه خود را با ما به اشتراک گذاشتید سپاسگزاریم.",
      status: 201,
    });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
