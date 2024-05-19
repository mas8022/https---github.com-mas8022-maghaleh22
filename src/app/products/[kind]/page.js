import React from "react";
import SideFilter from "../../components/template/sideFilter";

export default function products({ params }) {
  console.log(params.kind);
  return (
    <div className="w-full flex">
      <SideFilter />

      <div className="w-full flex justify-center py-28">
        <div className="grid grid-cols-3 gap-8">
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
          <div className="w-[15rem] h-[10rem] bg-second"></div>
        </div>
      </div>
    </div>
  );
}
