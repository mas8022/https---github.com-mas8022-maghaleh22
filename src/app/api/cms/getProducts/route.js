import connectToDb from "@/configs/db";
import productModel from "@/models/product";

export async function GET() {
  try {
    connectToDb();
    const products = await productModel
      .find(
        { status: "publish" },
        "title price author sellCount discount cover duration group"
      )
      .populate("author", "name")
      .sort({ _id: -1 })
      .lean();

    return Response.json(products);
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
