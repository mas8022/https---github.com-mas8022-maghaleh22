import connectToDb from "@/configs/db";
import authorModel from "@/models/author";

export async function GET() {
  try {
    connectToDb();
    const authors = await authorModel
      .find({}, "name job profile")
      .sort({ _id: -1 })
      .lean();

    return Response.json(authors);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}