import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function MainCategoryFlex() {
  return (
    <div className="flex items-center w-full">
      <div className=" grid grid-cols-2 xm:grid-cols-3 lgg:grid-cols-6 gap-8 my-0 mx-auto child:rounded-3xl">
        <Link
          data-aos="fade-left"
           data-aos-duration="2000"
          className="child:shadow-xl"
          href={"/products/software"}
        >
          <Button className="w-60 h-60 p-[4rem] flex flex-col items-center justify-center gap-8 rounded-[30px]">
            <Image
              src={"/images/imac-svgrepo-com.svg"}
              width={120}
              height={120}
              className="dark:invert"
              alt="دسته بندی ها"
              className="dark:invert"
            />
            <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
              نرم افزار و فناوری اطلاعات
            </span>
          </Button>
        </Link>
        <Link
          data-aos="fade-left"
           data-aos-duration="1500"
          className="child:shadow-xl"
          href={"/products/economics"}
        >
          <Button className="w-60 h-60 p-[4rem] flex flex-col items-center justify-center gap-8 rounded-[30px]">
            <Image
              src={"/images/envelope-stats-svgrepo-com.svg"}
              width={120}
              height={120}
              className="dark:invert"
              alt="دسته بندی ها"
            />
            <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
              اقتصاد و حسابداری
            </span>
          </Button>
        </Link>
        <Link
          data-aos="fade-left"
           data-aos-duration="1000"
          className="child:shadow-xl"
          href={"/products/business"}
        >
          <Button className="w-60 h-60 p-[4rem] flex flex-col items-center justify-center gap-8 rounded-[30px]">
            <Image
              src={"/images/job-desktop-svgrepo-com.svg"}
              width={120}
              height={120}
              className="dark:invert"
              alt="دسته بندی ها"
            />
            <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
              کسب و کار
            </span>
          </Button>
        </Link>
        <Link
          data-aos="fade-right"
           data-aos-duration="1000"
          className="child:shadow-xl"
          href={"/products/teenager"}
        >
          <Button className="w-60 h-60 p-[4rem] flex flex-col items-center justify-center gap-8 rounded-[30px]">
            <Image
              src={"/images/birdhouse-svgrepo-com.svg"}
              width={120}
              height={120}
              className="dark:invert"
              alt="دسته بندی ها"
            />
            <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
              کودک و نوجوان
            </span>
          </Button>
        </Link>
        <Link
          data-aos="fade-right"
           data-aos-duration="1500"
          className="child:shadow-xl"
          href={"/products/language"}
        >
          <Button className="w-60 h-60 p-[4rem] flex flex-col items-center justify-center gap-8 rounded-[30px]">
            <Image
              src={"/images/book-write-svgrepo-com.svg"}
              width={120}
              height={120}
              className="dark:invert"
              alt="دسته بندی ها"
            />
            <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
              اموزش زبان
            </span>
          </Button>
        </Link>
        <Link
          data-aos="fade-right"
           data-aos-duration="2000"
          className="child:shadow-xl"
          href={"/products/art"}
        >
          <Button className="w-60 h-60 p-[4rem] flex flex-col items-center justify-center gap-8 rounded-[30px]">
            <Image
              src={"/images/art-tools-svgrepo-com.svg"}
              width={120}
              height={120}
              className="dark:invert"
              alt="دسته بندی ها"
            />
            <span className="text-black text-[1.35rem] md:text-[1.3rem] dark:text-first">
              هنر و طراحی
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
