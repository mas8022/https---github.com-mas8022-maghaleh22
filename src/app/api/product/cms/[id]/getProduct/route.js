import connectToDb from "@/configs/db";
import productModel from '@/models/product'

export async function GET(req, { params }) {
  const productId = params.id;

  try {
    connectToDb()
    const product = await productModel.findOne({ _id: productId }).exec()

    return Response.json(product);
  } catch (error) {
    console.log("====>", error);
    
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
