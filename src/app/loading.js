"use client";
import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[30rem] flex items-center justify-center bg-black/0">
      <MoonLoader size={50} color="#f97316" />
    </div>
  );
};

export default Loading;
