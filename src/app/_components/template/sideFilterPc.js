import React, { memo } from "react";

const SideFilterPC = memo(({ filter, setFilter }) => {
  return (
    <div className="md:flex hidden w-full h-screen lg:w-96 gap-3 flex-col pt-20 bg-white dark:bg-[#1e293b]">
      <div
        onClick={() => setFilter("all")}
        className={`w-full h-14 border-b-[1px] border-b-first text-2xl dark:text-first pr-4 flex items-center active:scale-[99%] cursor-pointer ${
          filter === "all" && " bg-blue-600/10 rounded-xl cursor-pointer "
        }`}
      >
        همه محصولات
      </div>
      <div
        onClick={() => setFilter("bestSellers")}
        className={`w-full h-14 border-b-[1px] border-b-first text-2xl dark:text-first pr-4 flex items-center active:scale-[99%] cursor-pointer ${
          filter === "bestSellers" &&
          " bg-blue-600/10 rounded-xl cursor-pointer "
        }`}
      >
        پر فروش ترینّ
      </div>
      <div
        onClick={() => setFilter("cheapest")}
        className={`w-full h-14 border-b-[1px] border-b-first text-2xl dark:text-first pr-4 flex items-center active:scale-[99%] cursor-pointer ${
          filter === "cheapest" && " bg-blue-600/10 rounded-xl cursor-pointer "
        }`}
      >
        ارزان ترین
      </div>
      <div
        onClick={() => setFilter("mostVisited")}
        className={`w-full h-14 border-b-[1px] border-b-first text-2xl dark:text-first pr-4 flex items-center active:scale-[99%] cursor-pointer ${
          filter === "mostVisited" &&
          " bg-blue-600/10 rounded-xl cursor-pointer "
        }`}
      >
        پر بازدید ترین
      </div>
      <div
        onClick={() => setFilter("expensive")}
        className={`w-full h-14 border-b-[1px] border-b-first text-2xl dark:text-first pr-4 flex items-center active:scale-[99%] cursor-pointer ${
          filter === "expensive" && " bg-blue-600/10 rounded-xl cursor-pointer "
        }`}
      >
        گران ترین
      </div>
      <div
        onClick={() => setFilter("favorites")}
        className={`w-full h-14 border-b-[1px] border-b-first text-2xl dark:text-first pr-4 flex items-center active:scale-[99%] cursor-pointer ${
          filter === "favorites" && " bg-blue-600/10 rounded-xl cursor-pointer "
        }`}
      >
        محبوب ترین
      </div>
    </div>
  );
});

export default SideFilterPC;
