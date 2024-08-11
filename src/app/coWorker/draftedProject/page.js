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
    .find({ author: authorId }, "title cover duration sellCount price discount")
    .populate("author", "name");


  return (
    <div className="w-full">
      <Title title={"پروژهای تمام نشده"} />

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
          {products?.length
            ? products.map((item) => (
                <Cart productsData={item} btnMode={"draft"} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
});

export default page;
