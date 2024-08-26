import React, { memo } from "react";
import Title from "../../_components/template/title";
import Cart from "../../_components/modules/cart";
import productModel from "@/models/product";
import connectToDb from "@/configs/db";
import { GetAuthorId } from "@/utils/author";
import Image from "next/image";

const page = memo(async () => {
  connectToDb();

  const authorId = await GetAuthorId();

  const products = await productModel
    .find(
      { author: authorId, publish: false },
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
          <div className="w-full flex flex-col gap-8 items-center justify-center">
            <Image
              src="/images/sad.svg"
              width={50}
              height={50}
              alt="ناموجود"
              className="size-96 opacity-10 dark:invert"
            />
            <span className="text-2xl text-black/60 dark:text-first/60">
              محصولی در این قسمت وجود ندارد
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

export default page;
