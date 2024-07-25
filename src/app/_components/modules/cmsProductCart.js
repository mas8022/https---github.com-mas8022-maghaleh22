import Image from "next/image";
import Link from "next/link";
import React from "react";

const CmsProductCart = () => {
  return (
    <div className="w-[32rem] bg-first dark:bg-[#0d141f]/50 flex flex-col shadow-md pb-9 rounded-xl overflow-hidden">
      <Image
        src={"/images/teacher.jpg"}
        alt="product Image"
        width={320}
        height={230}
        className="w-full h-60 mb-5 object-cover"
      />
      <h2 className="px-10 text-[15px] font-bold mb-12 line-clamp-1 dark:text-first">
        اموزش زبان انگیسی از صفر تا صد
      </h2>

      <div className="w-full flex justify-between px-10 items-center gap-2 mb-12">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[13px] text-black/60 dark:text-first/60">استاد همایون حسینی</span>
          <span className="text-[13px] text-black/60 dark:text-first/60">10 ساعت و 18 دقیقه</span>
        </div>

        <p className="text-end w-[10rem] text-[1.3rem] text-black/80 dark:text-first/80 font-light">
          <span className="line-through">230,000</span> <span>120,000</span>
          تومان
        </p>
      </div>
      <div className="w-full flex px-10 items-center justify-between">
        <Link
          href={"/products/software/sfdsadfdfds"}
          className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
        >
          مشاهده
        </Link>
        <Link
          href={"/products/software/sfdsadfdfds"}
          className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
        >
          پاک کردن
        </Link>
        <Link
          href={"/products/software/sfdsadfdfds"}
          className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
        >
          ویرایش
        </Link>
      </div>
    </div>
  );
};

export default CmsProductCart;
