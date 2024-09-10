import React, { memo } from "react";
import Title from "../../_components/template/title";
import Cart from "../../_components/modules/cart";
import productModel from "@/models/product";
import connectToDb from "@/configs/db";
import { GetAuthorId } from "@/utils/author";

const page = memo(async () => {
  connectToDb();

  const authorId = await GetAuthorId();

  const products = await productModel
    .find(
      { ...(authorId && { author: authorId }), status: "draft" },

      "title cover duration sellCount price discount"
    )
    .populate("author", "name")
    .sort({ _id: -1 });

  return (
    <div className="w-full">
      <Title title={"پروژهای تمام نشده"} />

      <div className="w-full flex justify-center">
        {products?.length ? (
          <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
            {products.map((item) => (
              <Cart
                productData={JSON.parse(JSON.stringify(item))}
                btnMode={"draft"}
                key={item._id}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-56 flex items-center justify-center border-y-2 border-second/70 bg-second/15 dark:bg-second/5 text-second text-4xl rounded-lg">
            محصولی در این قسمت وجود ندارد
          </div>
        )}
      </div>
    </div>
  );
});

export default page;
