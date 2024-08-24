import productModel from "@/models/product";

export async function POST(req) {
  try {
    const { searchParam, filter } = await req.json();

    const search = decodeURIComponent(searchParam);

    let productArray = [];

    const wordsArray = [
      "همه محصولات",
      "نرم افزار و فناوری اطلاعات",
      "اقتصاد و حسابداری",
      "کسب و کار",
      "کودک و نوجوان",
      "اموزش زبان",
      "هنر طراحی",
    ];

    if (search === "همه محصولات") {
      productArray = await productModel
        .find({}, "group title cover duration sellCount price discount")
        .populate("author")
        .lean();
    } else if (!wordsArray.includes(search)) {
      productArray = await productModel
        .find(
          {
            title: { $regex: search, $options: "i" },
          },
          "group title cover duration sellCount price discount"
        )
        .populate("author");
    } else if (wordsArray.includes(search)) {
      productArray = await productModel
        .find(
          { group: search },
          "group title cover duration sellCount price discount"
        )
        .populate("author")
        .lean();
    }

    if (filter === "freeProducts") {
      productArray = productArray.filter((item) => item.price === 0);
    } else if (filter === "bestSellers") {
      productArray = productArray.sort((a, b) => b.sellCount - a.sellCount);
    } else if (filter === "cheapest") {
      productArray = productArray.sort((a, b) => a.price - b.price);
    } else if (filter === "expensive") {
      productArray = productArray.sort((a, b) => b.price - a.price);
    }

    return Response.json({ status: 200, data: productArray });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
