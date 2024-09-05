import connectToDb from "@/configs/db";
import authorModel from "@/models/author";

export async function GET() {
  try {
    connectToDb();
    const authors = await authorModel
      .find({ permission: false }, "name job profile ruleImage")
      .lean();

    return Response.json(authors);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
