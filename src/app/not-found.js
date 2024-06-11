import Image from "next/image";
import React from "react";
import MainSearch from "./components/template/mainSearch";

const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center xm:pt-0 pt-20 xm:gap-0 gap-20 ">
      <div className="w-full flex xm:flex-row flex-col-reverse items-center xm:justify-between">
        <p className="md:text-[3rem] xm:text-[2.3rem] text-[2rem] text-second drop-shadow-sm font-light">
          با عرض پوزش این صفحه وجود ندارد
        </p>
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
