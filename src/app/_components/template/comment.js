import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className="w-full bg-black/5 dark:bg-black/10 flex flex-col p-4 gap-1 rounded-lg overflow-hidden">
      <div className="w-full flex items-center gap-8">
        <Image
          src={"/images/profile.jpg"}
          width={100}
          height={100}
          alt="commenter Image"
          className="size-14 sm:size-20 object-cover rounded-full"
        />
        <p className="w-full text-[1.2rem] sm:text-[1.4rem] text-bold border-b-[1px] border-black/20 dark:border-first/50 font-light sm:font-medium">استاد ممنون بابت تدریستان</p>
      </div>
      <div className="w-full flex items-center justify-between">
      <span className="self-end text-black/50 dark:text-first/50 text-[1rem] sm:text-[1.2rem] font-light sm:font-medium">aliAhmadi22@gmail.com</span>
      <span className="self-end text-[1rem] sm:text-[1.3rem] font-light sm:font-medium">1403/02/06</span>
      </div>
    </div>
  );
};

export default Comment;
