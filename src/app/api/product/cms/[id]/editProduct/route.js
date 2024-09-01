import connectToDb from "@/configs/db";
import productModel from "@/models/product";

export async function POST(req, { params }) {
  const productId = params.id;

  try {
    connectToDb();
    // const product = await productModel.

    return Response.json({
      message: "محصول مورد نظر با موفقیت ویرایش شد",
      status: 200,
    });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
