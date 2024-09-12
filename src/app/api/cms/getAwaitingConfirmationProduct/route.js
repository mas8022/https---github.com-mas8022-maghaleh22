import connectToDb from "@/configs/db";
import productModel from "@/models/product";


export async function GET() {
  try {
    connectToDb();
    const products = await productModel
      .find(
        { status: "wait" },
        "title price author discount cover duration group"
      )
      .lean();

    return Response.json(products);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
