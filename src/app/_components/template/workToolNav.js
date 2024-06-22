"use client";
import Image from "next/image";
import React from "react";

const WorkToolNav = ({ pageName, setPageName }) => {
  return (
    <div className="WorkToolNav w-full h-auto mb-16 px-9 xm:py-4 py-10 gap-20 flex xm:flex-row flex-col-reverse items-center justify-between bg-second/5 dark:bg-[#111827]/60 border-y-1 border-y-second/50 rounded-lg">
      <div className="h-full flex items-center gap-8 xm:child:text-[1.4rem] child:text-[1.3rem] child:font-light child:cursor-pointer child:dark:border-b-first/80 child:border-b-black/80">
        <div
          onClick={() => setPageName("newProject")}
          className={pageName === "newProject" ? "border-b-1" : ""}
        >
          پروژه جدید
        </div>
        <div
          onClick={() => setPageName("draftedProject")}
          className={pageName === "draftedProject" ? "border-b-1" : ""}
        >
          پیش نویس ها
        </div>
        <div
          onClick={() => setPageName("myProject")}
          className={pageName === "myProject" ? "border-b-1" : ""}
        >
          پروژ های من
        </div>
      </div>
      <div className="h-full flex items-center gap-8">
        <button className="sm:size-20 size-14 bg-second/10 rounded-full flex items-center justify-center cursor-pointer active:scale-95 active:bg-first/5 transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="sm:size-10 size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg>
        </button>
        <Image
          src={"/images/profile.jpg"}
          width={100}
          height={100}
          alt="عکس نویسنده"
          className="size-24 object-cover border-2 border-second/50 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default WorkToolNav;
