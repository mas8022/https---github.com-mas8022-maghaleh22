import connectToDb from "@/configs/db";
import authorModel from "@/models/author";
import AuthorReceiveMessage from "@/models/AuthorReceiveMessage";
import { revalidatePath } from "next/cache";

export async function POST(req, { params }) {
  try {
    const { message } = await req.json();

    const authorId = params.id;

    connectToDb();

    await AuthorReceiveMessage.create({
      author: authorId,
      message,
      seen: false,
    });

    revalidatePath("/", "layout");

    return Response.json({ message: "پیام ارسال شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const authorId = params.id;
    connectToDb();
    await authorModel.findOneAndDelete({ _id: authorId });

    revalidatePath("/", "layout");
    
    return Response.json({ message: "نویسنده حذف شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
