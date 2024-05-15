import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function MainCategoryFlex() {
  return (
    <div className="flex items-center w-full">
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-8 my-0 mx-auto">
        <Link href={"/products/software"}>
          <Button className="p-[4rem] w-60 h-60 md:h-80 lg md:w-80 lg:w-96 bg-second/90 flex flex-col items-center justify-center gap-8">
            <Image
              src={"/images/imac-svgrepo-com.svg"}
              width={120}
              height={120}
            />
            <span className="text-first text-[1.35rem] md:text-[1.7rem]">
              نرم افزار و فناوری اطلاعات
            </span>
          </Button>
        </Link>
        <Link href={"/products/economics"}>
          <Button className="p-[4rem] w-60 h-60 md:h-80 lg md:w-80 lg:w-96 bg-second/90 flex flex-col items-center justify-center gap-8">
            <Image
              src={"/images/envelope-stats-svgrepo-com.svg"}
              width={120}
              height={120}
            />
            <span className="text-first text-[1.35rem] md:text-[1.7rem]">اقتصاد و حسابداری</span>
          </Button>
        </Link>
        <Link href={"/products/business"}>
          <Button className="p-[4rem] w-60 h-60 md:h-80 lg md:w-80 lg:w-96 bg-second/90 flex flex-col items-center justify-center gap-8">
            <Image
              src={"/images/job-desktop-svgrepo-com.svg"}
              width={120}
              height={120}
            />
            <span className="text-first text-[1.35rem] md:text-[1.7rem]">کسب و کار</span>
          </Button>
        </Link>
        <Link href={"/products/teenager"}>
          <Button className="p-[4rem] w-60 h-60 md:h-80 lg md:w-80 lg:w-96 bg-second/90 flex flex-col items-center justify-center gap-8">
            <Image
              src={"/images/birdhouse-svgrepo-com.svg"}
              width={120}
              height={120}
            />
            <span className="text-first text-[1.35rem] md:text-[1.7rem]">کودک و نوجوان</span>
          </Button>
        </Link>
        <Link href={"/products/language"}>
          <Button className="p-[4rem] w-60 h-60 md:h-80 lg md:w-80 lg:w-96 bg-second/90 flex flex-col items-center justify-center gap-8">
            <Image
              src={"/images/book-write-svgrepo-com.svg"}
              width={120}
              height={120}
            />
            <span className="text-first text-[1.35rem] md:text-[1.7rem]">اموزش زبان</span>
          </Button>
        </Link>
        <Link href={"/products/art"}>
          <Button className="p-[4rem] w-60 h-60 md:h-80 lg md:w-80 lg:w-96 bg-second/90 flex flex-col items-center justify-center gap-8">
            <Image
              src={"/images/art-tools-svgrepo-com.svg"}
              width={120}
              height={120}
            />
            <span className="text-first text-[1.35rem] md:text-[1.7rem]">هنر و طراحی</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
