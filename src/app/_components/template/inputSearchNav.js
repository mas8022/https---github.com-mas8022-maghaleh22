"use client";
import useToggle from "../../../../utils/toggle";
import React from "react";

export default function InputSearchNav() {
  const [isOpen, toggleOpen] = useToggle("inputSearchNavActivation");
  return (
    <div
      className={`${
        isOpen ? "w-[15rem] sm:w-[20rem]" : "size-14 sm:size-16"
      } p-4 py-2 rounded-full bg-second/10 flex items-center justify-end overflow-hidden gap-2`}
    >
      <input
        onClick={(e) => e.stopPropagation()}
        type="search"
        placeholder="چه اموزشی..."
        className={`${
          isOpen ? "w-full" : "w-0 "
        }h-full text-[1.2rem] xm:text-[1.35rem] outline-none font-light xm:font-bold focus:outline-none bg-second/0 transition-all duration-300 ease-in-out overflow-hidden`}
      />

      <div
        onClick={(e) => toggleOpen(e)}
        className="h-10 sm:h-12 w-8 bg-second/0 flex items-center justify-center rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="cursor-pointer sm:size-10 size-7 active:scale-95 dark:invert"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
