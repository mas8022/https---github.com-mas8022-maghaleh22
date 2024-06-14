import Image from "next/image";
import React from "react";

const Ad = () => {
  return (
    <div className="w-full py-9 lg:flex sm:grid sm:grid-cols-2 hidden items-center justify-between border-b-1 px-4 border-b-second rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={"/images/ad2.jpg"}
          width={300}
          height={300}
          alt="ویژگی های سایت"
          className="w-[24rem] h-[17rem] object-cover"
        />
        <span className="text-[1.5rem] text-black/70 font-light">
          اموزش اسان
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={"/images/ad3.jpg"}
          width={300}
          height={300}
          alt="ویژگی های سایت"
          className="w-[24rem] h-[17rem] object-cover"
        />
        <span className="text-[1.5rem] text-black/70 font-light">
          اساتید اکاه
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={"/images/ad4.jpg"}
          width={300}
          height={300}
          alt="ویژگی های سایت"
          className="w-[24rem] h-[17rem] object-cover"
        />
        <span className="text-[1.5rem] text-black/70 font-light">
          لذت در یادگیری
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={"/images/ad1.jpg"}
          width={300}
          height={300}
          alt="ویژگی های سایت"
          className="w-[24rem] h-[17rem] object-cover"
        />
        <span className="text-[1.5rem] text-black/70 font-light">
          اموزش های متنوع
        </span>
      </div>
    </div>
  );
};

export default Ad;
