import connectToDb from "@/configs/db";
import authorModel from "@/models/author";
import AuthorReceiveMessage from "@/models/AuthorReceiveMessage";

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

    return Response.json({ message: "پیام ارسال شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const authorId = params.id;
    console.log("params: ", authorId);

    connectToDb();
    await authorModel.findOneAndDelete({ _id: authorId });

    return Response.json({ message: "نویسنده با موفقیت حذف شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
