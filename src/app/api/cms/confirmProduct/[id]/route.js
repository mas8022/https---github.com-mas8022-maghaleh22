import connectToDb from "@/configs/db";
import productModel from "@/models/product";

export async function PUT(req, { params }) {
  try {
    const productId = params.id;

    connectToDb();
    await productModel.findOneAndUpdate(
      { _id: productId },
      { status: "publish" }
    );
    return Response.json({ message: "محصول با موفقیت منتشر شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}