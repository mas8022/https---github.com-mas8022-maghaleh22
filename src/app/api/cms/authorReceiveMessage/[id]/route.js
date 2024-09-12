import connectToDb from "@/configs/db";
import AuthorReceiveMessageModel from "@/models/AuthorReceiveMessage";
import { GetAuthorId } from "@/utils/author";
import { revalidatePath } from "next/cache";

export async function PUT(req, { params }) {
  const messageId = params.id;
  try {
    connectToDb();
    const authorId = await GetAuthorId();

    await AuthorReceiveMessageModel.findOneAndDelete(
      {
        _id: messageId,
        author: authorId,
      },
      { seen: true }
    );

    revalidatePath("/", "layout");

    return Response.json({ message: "پیام حذف شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
