import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthorBox = () => {
  return (
    <div className="w-full rounded-3xl bg-first py-8 flex items-center justify-center gap-8 shadow-lg relative">
      <div className="w-40 h-full rounded-tl-full rounded-bl-full bg-second/50 absolute right-0 top-0 hidden sm:block"></div>

      <div className="flex w-[90%] sm:w-[60%] h-full items-center justify-between gap-8">
        <div className="w-full h-full flex flex-col gap-4 py-8">
          <h3 className="font-bold text-[1.6rem] sm:text-[2rem]">
            استاد حسین احمدی
          </h3>
          <p className="font-bold text-[1.45rem] sm:text-[1.5rem] text-[#000]/65">
            مهندس عمران و معماری
          </p>

          <span className="font-bold text-[1.35rem] sm:text-[1.5rem] text-[#000]/40 line-clamp-3">
            زهرا ضمامی کارشناس تکنولوژی نرم افزار هستند و کار تخصصی ایشان در
            زمینه برنامه نویسی و طراحی است، همچنین ایشان مدرس نرم افزار های
            گرافیکی نیز می باشند.
          </span>

          <Link href={"/"} className="text-[1.6rem] text-blue-600 font-bold">
            ادامه مطلب...
          </Link>
        </div>

        <Image
          src={"/images/profile.jpg"}
          width={100}
          height={100}
          alt="author image"
          className="size-40 sm:size-64 rounded-3xl object-cover"
        />
      </div>

      <div className="w-40 h-full rounded-tr-full rounded-br-full bg-second/50 absolute left-0 top-0 hidden sm:block"></div>
    </div>
  );
};

export default AuthorBox;
