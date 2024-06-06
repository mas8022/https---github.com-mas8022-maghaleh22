"use client";
import Image from "next/image";
import React from "react";

const Discount = () => {
  return (
    <div className="w-full lgg:h-28 h-32 lg:mt-0 md:mt-8 mt-4 bg-second flex items-center justify-between px-[2.5rem] rounded-bl-3xl rounded-br-3xl">
      <Image
        src={"/images/discount-svgrepo-com.svg"}
        width={100}
        height={100}
        alt="discount"
        className="sm:size-20 size-16 xm:block hidden"
      />
      <p className="sm:text-[1.6rem] text-[1.3rem] text-first font-bold ">
        تخفیفات ویژه 60% به مناسبت ماه رمضان
      </p>
      <button className="sm:size-14 size-10 bg-first/20 sm:rounded-3xl rounded-xl flex items-center justify-center active:scale-95">
        <Image
          src={"/images/multiplication-svgrepo-com.svg"}
          width={100}
          height={100}
          alt="close"
          className="sm:size-7 size-5"
        />
      </button>
    </div>
  );
};

export default Discount;
