import connectToDb from "@/configs/db";
import productModel from "@/models/product";

export async function DELETE(req, { params }) {
  try {
    const productId = params.id;

    connectToDb();
    await productModel.findOneAndDelete({ _id: productId });

    return Response.json({ message: "محصول با موفقیت حذف شد", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}