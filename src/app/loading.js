"use client";
import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-black/0 pt-72">
      <MoonLoader size={50} color="#f97316" />
    </div>
  );
};

export default Loading;
