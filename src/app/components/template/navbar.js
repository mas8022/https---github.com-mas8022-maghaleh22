"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Bg from "../modules/bg";

export default function Navbar() {
  const [sideFlag, setSideFlag] = useState(false);

  useEffect(() => {
    const closeSideBarHandler = (e) => {
      if (e.target.contains(document.querySelector(".bgActive"))) {
        setSideFlag(false);
      }
    };
    window.addEventListener("click", (e) => {
      closeSideBarHandler(e);
    });
    return () => window.removeEventListener("click", closeSideBarHandler);
  });

  return (
    <div className="w-full h-[5rem] md:h-[8rem] shadow-md flex items-center justify-between px-6 sm:px-[5rem] md:px-[10rem] xl:px-[15rem]">
      <div className="flex gap-4 sm:gap-8 md:gap-10 items-center">
        <Image
          src={"/images/logo.png"}
          alt="site logo"
          width={50}
          height={50}
          className="w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem]"
        />
        <div className="w-[10rem] md:w-[12rem] h-[3rem] md:h-[4rem] text-[1.3rem] md:text-[1.7rem] rounded-md bg-slate-500/30 active:bg-slate-500/20 flex items-center justify-center cursor-pointer active:text-emerald-600">
          ورود/ثبت نام
        </div>
      </div>
      <ul className="gap-3 sm:gap-6 md:gap-7 text-[1.25rem] md:text-[1.6rem]  hidden sm:flex">
        <li>همکاری باما</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
        <li>نرخ ترجمه</li>
        <li>خانه</li>
      </ul>
      <svg
        onClick={() => setSideFlag(true)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-12 sm:hidden"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      <div
        className={
          sideFlag
            ? "transition-all ease-in-out duration-[0.4s] sideOpen w-[25rem] h-screen fixed top-0 right-0 shadow-2xl bg-white z-[100]"
            : "transition-all ease-in-out duration-[0.4s] sideClose w-[25rem] h-screen fixed top-0 right-[-30rem] shadow-2xl bg-white z-[100]"
        }
      ></div>
      <Bg active={sideFlag ? true : false} />
    </div>
  );
}
