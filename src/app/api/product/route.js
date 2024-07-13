import { Author } from "../../../../utils/author";
import connectToDb from "../../../../configs/db";
import productModel from "../../../../models/product";
import { redirect } from "next/navigation";
export async function POST(req, { params }) {
  try {
    const author = await Author();
    if (!author.email) {
      return redirect("coWorker/employment");
    }

    const formData = await req.formData();

    const group = formData.get("group");
    const title = formData.get("title");
    const price = formData.get("price");
    const articleText = formData.get("articleText");
    const articleVideo = formData.get("articleVideo");
    const tags = formData.get("tags");
    const discount = formData.get("discount");


    // // validation

    // function calcVideoTime(articleVideo) {
    //   //    const time =  // calcVideoTime

    //   return time;
    // }

    // const videoTime = calcVideoTime(articleVideo);

    // connectToDb();
    // await productModel.create({
    //   group,
    //   title,
    //   price,
    //   videoTime,
    //   author,
    //   articleText,
    //   articleVideo,
    //   comments: [],
    //   tags,
    //   publish: false,
    //   sellCount: 0,
    //   discount: 0,
    // });

    return Response.json({
      message:
        "محصول با موفقیت فرستاده شد در صورت تایید مقاله از سمت سایت بعد از یک الی دو روز به شما از طریق ایمیل اطلاع داده خواهد شد",
      status: 201,
    });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
