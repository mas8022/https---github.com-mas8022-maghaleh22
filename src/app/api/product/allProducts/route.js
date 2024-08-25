import connectToDb from "@/configs/db";
import productModel from "@/models/product";

export async function POST(req) {
  try {
    const { searchParam, filter } = await req.json();
    const search = decodeURIComponent(searchParam);

    await connectToDb();

    let productArray = [];

    productArray = await productModel.aggregate([
      {
        $match: {
          tags: { $regex: new RegExp(search, "i") },
        },
      },
      {
        $lookup: {
          from: "authors",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      {
        $unwind: "$author",
      },
      {
        $project: {
          group: 1,
          title: 1,
          cover: 1,
          duration: 1,
          sellCount: 1,
          price: 1,
          discount: 1,
          author: { name: 1 },
        },
      },
    ]);

    if (filter === "freeProducts") {
      productArray = productArray.filter((item) => item.price === 0);
    } else if (filter === "bestSellers") {
      productArray = productArray.sort((a, b) => b.sellCount - a.sellCount);
    } else if (filter === "cheapest") {
      productArray = productArray.sort((a, b) => a.price - b.price);
    } else if (filter === "expensive") {
      productArray = productArray.sort((a, b) => b.price - a.price);
    }

    return new Response(JSON.stringify({ status: 200, data: productArray }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "اینترنت خود را چک کنید", status: 500 }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
