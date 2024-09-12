import connectToDb from "@/configs/db";
import userModel from "@/models/user";
import { MeId } from "@/utils/me";
import { revalidatePath } from "next/cache";
export async function PUT(req, { params }) {
  try {
    connectToDb();
    const meId = await MeId();
    if (!meId) {
      return Response.json({
        message: "اول در سایت ثبت نام کنید",
        status: 404,
      });
    }

    const ProductId = params.id;
    await userModel.findOneAndUpdate(
      { _id: meId },
      {
        $addToSet: {
          myProducts: ProductId,
        },
      }
    );

    revalidatePath("/", "layout");


    return Response.json({ message: "محصول خریداری شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
