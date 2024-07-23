"use client";
import React from "react";
import SideFilterMobile from "../../_components/template/sideFilter";
import Cart from "../../_components/modules/cart";
import SideFilterPC from "../../_components/template/sideFilterPc";
import Hr from "../../_components/modules/hr";
import useLocalStorage from "../../_components/modules/localStore";

export default function products({ params }) {
  const [filter, setFilter] = useLocalStorage("sideFilterValue", "all");

  return (
    <>
      <div className="w-full flex">
        <SideFilterPC setFilter={setFilter} filter={filter} />

        <div className="w-full  flex flex-col items-end gap-40 py-[5rem] md:pr-14">
          <div className=" w-full flex items-center justify-between md:justify-end gap-8">
            <SideFilterMobile setFilter={setFilter} filter={filter} />

            <div className="flex h-16 items-center justify-end gap-4 border-[1px] border-gray-800/20 dark:border-first/50 pl-4 py-1 rounded-md">
              <input
                className="pr-4 h-full w-[20rem] dark:bg-[#1e293b] sm:w-[30rem] text-[1.4rem] text-black dark:text-first pl-2 focus:outline-none outline-none"
                type="search"
                placeholder="چه اموزشی مد نظرتان است؟..."
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 active:scale-95 cursor-pointer dark:invert"
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
      <Hr />
    </>
  );
}
