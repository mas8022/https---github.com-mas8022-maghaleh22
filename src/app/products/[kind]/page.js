"use client";
import React, { useState } from "react";
import SideFilter from "../../components/template/sideFilter";
import Image from "next/image";
import Cart from "../../components/modules/cart";

export default function products({ params }) {
  console.log(params.kind);
  const [active, setActive] = useState(false);

  return (
    <div className="w-full flex">
      <SideFilter setActive={setActive} active={active} />

      <div className="w-full  flex flex-col items-end gap-40 py-[5rem] md:pr-14">
        <div className=" w-full flex items-center justify-between md:justify-end gap-8">
          <div
            onClick={() => setActive((p) => !p)}
            className="text-[1.3rem] text-second md:hidden w-24 h-12 bg-second/10 flex items-center justify-center rounded-md"
          >
            بر اساس
          </div>

          <div className="flex h-14 items-center justify-end gap-4 border-1 border-gray-800/20 pl-4 py-1 rounded-md">
            <input
              className="pr-4 h-full w-[20rem] sm:w-[30rem] text-[1.3rem] pl-2 focus:outline-none outline-none"
              type="search"
              placeholder="چه اموزشی مد نظرتان است؟..."
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 active:scale-95 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
