"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "../modules/aos";

export default function MainCategoryFlex() {
  return (
    <div className="flex items-center w-full">
      <Aos />
      <div className=" grid grid-cols-2 xm:grid-cols-3 lgg:grid-cols-6 gap-8 my-0 mx-auto child:rounded-3xl">
        <Link
          data-aos="fade-left"
          data-aos-duration="2000"
          href={"/products/software"}
          className="size-60 p-[1rem] flex flex-col items-center justify-center gap-8 bg-gray-700/70 rounded-[30px]"
        >
          <Image
            src={"/images/imac-svgrepo-com.svg"}
            width={120}
            height={120}
            className="size-28 dark:invert"
            alt="دسته بندی ها"
          />
          <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
            نرم افزار و فناوری اطلاعات
          </span>
        </Link>

        <Link
          data-aos="fade-left"
          data-aos-duration="2000"
          href={"/products/economics"}
          className="size-60 p-[1rem] flex flex-col items-center justify-center gap-8 bg-gray-700/70 rounded-[30px]"
        >
          <Image
            src={"/images/envelope-stats-svgrepo-com.svg"}
            width={120}
            height={120}
            className="size-28 dark:invert"
            alt="دسته بندی ها"
          />
          <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
            اقتصاد و حسابداری
          </span>
        </Link>

        <Link
          data-aos="fade-left"
          data-aos-duration="1000"
          href={"/products/business"}
          className="size-60 p-[1rem] flex flex-col items-center justify-center gap-8 bg-gray-700/70 rounded-[30px]"
        >
          <Image
            src={"/images/job-desktop-svgrepo-com.svg"}
            width={120}
            height={120}
            className="size-28 dark:invert"
            alt="دسته بندی ها"
          />
          <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
            کسب و کار
          </span>
        </Link>

        <Link
          data-aos="fade-right"
          data-aos-duration="1000"
          href={"/products/teenager"}
          className="size-60 p-[1rem] flex flex-col items-center justify-center gap-8 bg-gray-700/70 rounded-[30px]"
        >
          <Image
            src={"/images/birdhouse-svgrepo-com.svg"}
            width={120}
            height={120}
            className="size-28 dark:invert"
            alt="دسته بندی ها"
          />
          <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
            کودک و نوجوان
          </span>
        </Link>

        <Link
          data-aos="fade-right"
          data-aos-duration="1500"
          href={"/products/language"}
          className="size-60 p-[1rem] flex flex-col items-center justify-center gap-8 bg-gray-700/70 rounded-[30px]"
        >
          <Image
            src={"/images/book-write-svgrepo-com.svg"}
            width={120}
            height={120}
            className="size-28 dark:invert"
            alt="دسته بندی ها"
          />
          <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
            اموزش زبان
          </span>
        </Link>

        <Link
          data-aos="fade-right"
          data-aos-duration="2000"
          href={"/products/art"}
          className="size-60 p-[1rem] flex flex-col items-center justify-center gap-8 bg-gray-700/70 rounded-[30px]"
        >
          <Image
            src={"/images/art-tools-svgrepo-com.svg"}
            width={120}
            height={120}
            className="size-28 dark:invert"
            alt="دسته بندی ها"
          />
          <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
            هنر و طراحی
          </span>
        </Link>
      </div>
    </div>
  );
}
