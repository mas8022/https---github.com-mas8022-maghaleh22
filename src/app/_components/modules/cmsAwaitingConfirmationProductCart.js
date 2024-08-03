"use client";
import useConvertTime from "@/utils/useConvertTime";
import useDiscountPrice from "@/utils/useDiscountPrice";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const CmsAwaitingConfirmationProductCart = memo(({ item }) => {
  const { _id, title, price, author, discount, cover, duration } = item;

  const { hour, minute } = useConvertTime(duration);

  const { discountPrice } = useDiscountPrice(price, discount);

  return (
    <div className="w-[32rem] bg-first dark:bg-[#0d141f]/50 flex flex-col shadow-md pb-9 rounded-xl overflow-hidden">
      <Image
        src={!cover ? cover : "/images/teacher.jpg"}
        alt="product Image"
        width={320}
        height={230}
        className="w-full h-60 mb-5 object-cover"
      />
      <h2 className="px-10 text-[15px] font-bold mb-12 line-clamp-1 dark:text-first">
        {title}
      </h2>

      <div className="w-full flex justify-between px-10 items-center gap-2 mb-12">
        <div className="flex flex-col gap-3">
          <span className="text-[13px] text-black/60 dark:text-first/60">
            {author.name}
          </span>
          <span className="text-[13px] text-black/60 dark:text-first/60">
            {hour} ساعت و {minute} دقیقه
          </span>
        </div>

        <p className="text-end w-[10rem] text-[1.3rem] text-black/80 dark:text-first/80 font-light">
          <span className="line-through">{discountPrice}</span>{" "}
          <span>{price}</span>
          تومان
        </p>
      </div>
      <div className="w-full flex px-10 items-center justify-between">
        <Link
          href={`/products/software/${_id}`}
          className="w-full h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
        >
          مشاهده
        </Link>
      </div>
    </div>
  );
});
export default CmsAwaitingConfirmationProductCart;
