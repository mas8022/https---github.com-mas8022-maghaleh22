"use client";
import useSanitizeInput from "@/utils/useSanitizeInput";
import React, { memo, useState } from "react";

const MainSearch = memo(() => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full py-10 pb-14 border-y-1 border-y-second/90 bg-second/10 flex flex-col gap-12 items-center justify-center rounded-3xl">
      <p className="md:text-[2.5rem] text-[2rem] font-light text-black/60 dark:text-first">
        دنبال چه اموزشی هستید؟
      </p>
      <div className="md:w-1/2 w-[70%] h-16 flex overflow-hidden rounded-lg">
        <button className="ld:w-1/6 w-2/6 h-full bg-second text-first xxm:text-[1.5rem] text-[1.4rem] font-light active:bg-second/50">
          جستجو
        </button>
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(useSanitizeInput(e.target.value));
          }}
          className="w-full sm:px-8 px-5 text-[1.5rem] text-black dark:text-first font-light focus:outline-none outline-none dark:bg-first/30"
        />
      </div>
    </div>
  );
});

export default MainSearch;
