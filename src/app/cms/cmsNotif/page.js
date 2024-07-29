import React from "react";
import CmsNotifCart from "../../_components/modules/cmsNotifCart";

const page = () => {
  return (
    <div>
      <div className="w-full pb-12 border-b-[1px] border-b-second/50 flex justify-end">
        <div className="navbar flex h-14 items-center justify-end gap-4 border-[2px] border-gray-800/20 dark:border-first/60 dark:border-[1px] pl-4 py-1 rounded-md">
          <input
            className="pr-4 h-full w-[20rem] sm:w-[30rem] bg-black/0 text-[1.3rem] pl-2 focus:outline-none outline-none dark:text-first font-light"
            type="search"
            placeholder="دنبال پیام کدام شخص هستین؟..."
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
      <div className="w-full  flex flex-col items-end gap-40 py-[5rem] md:pr-14">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
            <CmsNotifCart />
            <CmsNotifCart />
            <CmsNotifCart />
            <CmsNotifCart />
            <CmsNotifCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
