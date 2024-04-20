import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[5rem] md:h-[8rem] shadow-md flex items-center justify-between px-6 sm:px-[5rem] md:px-[10rem] xl:px-[15rem]">
      <div className="flex gap-8 items-center">
        <Image
          src={"/images/logo.png"}
          alt="site logo"
          width={50}
          height={50}
          className="w-[4rem] h-[4rem] hidden md:block"
        />
        <div className="w-[10rem] md:w-[12rem] h-[3rem] md:h-[4rem] text-[1.3rem] md:text-[1.7rem] rounded-md bg-slate-500/30 flex items-center justify-center">
          ورود/ثبت نام
        </div>
      </div>
      <ul className="flex gap-3 sm:gap-6 md:gap-7 text-[1.25rem] md:text-[1.6rem]">
        <li>درباره ما</li>
        <li>تماس با ما</li>
        <li>نرخ ترجمه</li>
        <li>خانه</li>
      </ul>
    </div>
  );
}
