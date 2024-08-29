import productModel from "@/models/product";

export async function POST(req) {
  try {
    const { productID } = await req.json();

    const product = await productModel.findOne({ _id: productID });

    if (product.status === "wait") {
      await productModel.findOneAndUpdate(
        { _id: productID },
        {
          status: "draft",
        }
      );
      return Response.json({
        message:
          "محصول با موفقیت از فهرست بازبینیه مقاله های مدیر سایت خارج شد",
        status: 200,
      });
    } else {
      await productModel.findOneAndUpdate(
        { _id: productID },
        {
          status: "wait",
        }
      );
      return Response.json({
        message: "محصول با موفقیت جهت تایید از سمت مدیر سایت فرستاده شد",
        status: 200,
      });
    }

    return Response.json({
      message: "محصول با موفقیت جهت تایید از سمت مدیر سایت فرستاده شد",
      status: 200,
    });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
