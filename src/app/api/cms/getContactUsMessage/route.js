import connectToDb from "@/configs/db";
import contactUsMessage from "@/models/contactUsMessage";

export async function GET() {
  try {
    connectToDb();
    const messages = await contactUsMessage.find({ isAnswer: false }, "_id").lean();
    const messagesLength = messages.length;

    return Response.json(messagesLength);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
