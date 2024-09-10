import connectToDb from "@/configs/db";
import userModel from "@/models/user";
import { MeId } from "@/utils/me";
export async function PUT(req, { params }) {
  try {
    console.log("run");
    connectToDb();
    const meId = await MeId();

    const ProductId = params.id;
    await userModel.findOneAndUpdate(
      { _id: meId },
      {
        $addToSet: {
          myProducts: ProductId,
        },
      }
    );
    
    

    return Response.json({ message: "محصول خریداری شد", status: 200 });
  } catch (error) {
    console.log("=====> ", error);

    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
