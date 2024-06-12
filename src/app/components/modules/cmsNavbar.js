import Image from "next/image";
import React from "react";

const CmsNavbar = () => {
  return (
    <div className="nav w-full h-28 bg-first shadow-xl flex items-center justify-between py-4 px-12">
      <button className="size-20 bg-black/10 rounded-full flex items-center justify-center cursor-pointer active:scale-95 active:bg-first transition-all duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>
      </button>
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end gap-1">
          <p className="text-[1.5rem] text-black/80">علی قاسمی</p>
          <p className="text-[1.3rem] font-light text-black/60">
            aliGhasemi@gmail.com
          </p>
        </div>
        <Image
          src={"/images/profile.jpg"}
          width={100}
          height={100}
          alt="عکس ادمین"
          className="size-24 rounded-full"
        />
      </div>
    </div>
  );
};

export default CmsNavbar;
