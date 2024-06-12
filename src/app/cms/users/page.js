import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full pb-12 border-b-1 border-b-second/50 flex justify-end">
        <div className="navbar flex h-14 items-center justify-end gap-4 border-1 border-gray-800/20 pl-4 py-1 rounded-md">
          <input
            className="pr-4 h-full w-[20rem] sm:w-[30rem] text-[1.3rem] pl-2 focus:outline-none outline-none"
            type="search"
            placeholder="دنبال چه کاربر ای هستین؟..."
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
      <span className="text-[3rem]">users</span>
    </div>
  );
};

export default page;
