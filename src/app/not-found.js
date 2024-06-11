import Image from "next/image";
import React from "react";
import MainSearch from "./components/template/mainSearch";

const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        <p className="text-[3rem] text-second drop-shadow-sm font-light">با عرض پوزش این صفحه وجود ندارد</p>
        <Image
          src={"/images/404.png"}
          width={1000}
          height={1000}
          alt="این صفحه وجود ندارد"
          className="size-[20rem]"
        />
      </div>
      <MainSearch />
    </div>
  );
};

export default Page;
