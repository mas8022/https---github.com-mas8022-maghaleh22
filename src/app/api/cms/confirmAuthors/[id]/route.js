import connectToDb from "@/configs/db";
import authorModel from "@/models/author";
import { revalidatePath } from "next/cache";

export async function PUT(req, { params }) {
  try {
    const authorId = params.id;
    connectToDb();
    await authorModel.findOneAndUpdate({ _id: authorId }, { permission: true });
    
    revalidatePath("/", "layout");

    return Response.json({ message: "نویسنده تایید شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
