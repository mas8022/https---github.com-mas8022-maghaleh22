import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <div className="w-[32rem] h-[29rem] bg-first flex flex-col shadow-md">
      <Image
        src={"/images/teacher.jpg"}
        alt="product Image"
        width={320}
        height={230}
        className="w-full h-60 mb-5 object-cover"
      />
      <h2 className="px-10 text-[15px] font-bold mb-12 line-clamp-1">
        اموزش زبان انگیسی از صفر تا صد
      </h2>
      <div className="w-full flex justify-between px-10 items-center gap-2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[13px] text-second/60">استاد همایون حسینی</span>
          <span className="text-[13px] text-second/60">10 ساعت و 18 دقیقه</span>
        </div>
        <Link
          href={"/products/software/sfdsadfdfds"}
          className="w-32 h-14 flex items-center justify-center text-second active:text-first text-[1.5rem] font-light border-1 bg-first active:bg-second border-second active:border-first rounded-lg"
        >
          مشاهده
        </Link>
      </div>
    </div>
  );
}
