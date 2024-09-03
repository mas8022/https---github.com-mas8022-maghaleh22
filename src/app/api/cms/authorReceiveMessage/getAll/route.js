import connectToDb from "@/configs/db";
import AuthorReceiveMessageModel from "@/models/AuthorReceiveMessage";
import { GetAuthorId } from "@/utils/author";

export async function GET() {
  try {
    connectToDb();
    const authorId = await GetAuthorId();

    const messages = await AuthorReceiveMessageModel.find(
      {
        author: authorId,
        seen: false,
      },
      "_id"
    );

    const messageLength = messages.length;
    console.log(messageLength);

    return Response.json({ data: messageLength, status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
