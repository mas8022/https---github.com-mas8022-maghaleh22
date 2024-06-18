import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-8 flex flex-col items-center">
      <div className="w-full h-auto lg:h-[42rem] bg-second/60 dark:bg-[#fb923c] px-6 sm:px-[5rem] lg:px-[10rem] xl:px-[15rem] flex flex-col md:flex-row justify-between py-20 gap-16 lg:gap-8">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-between gap-8 lg:gap-16">
          <div className="flex gap-20">
            <ul className="flex flex-col">
              <p className="text-[1.7rem] lg:text-[2rem] border-b-1 border-black/50 mb-4 dark:text-[#1e293b]">
                دسته بندی ها
              </p>
              <Link
                href={"/products/software"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                نرم افزار و فناوری اطلاعات
              </Link>
              <Link
                href={"/products/economics"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                اقتصاد و حسابداری
              </Link>
              <Link
                href={"/products/business"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                کسب و کار
              </Link>
              <Link
                href={"/products/teenager"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                کودک و نوجوان
              </Link>
              <Link
                href={"/products/language"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                اموزش زبان
              </Link>
              <Link
                href={"/products/art"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                هنر طراحی
              </Link>
            </ul>
            <ul className="flex flex-col">
              <p className="text-[1.7rem] lg:text-[2rem] border-b-1 border-black/50 mb-4 dark:text-[#1e293b]">
                دسترسی سریع
              </p>
              <Link
                href={"/"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                خانه
              </Link>

              <Link
                href={"/coWorker"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                همکاری با ما
              </Link>
              <Link
                href={"/contactUs"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                تماس با ما
              </Link>
              <Link
                href={"aboutUs"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                درباره ما
              </Link>
              <Link
                href={"/regulation"}
                className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
              >
                قوانین و مقررات
              </Link>
            </ul>
          </div>
          <div className="flex gap-8">
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              alt="site logo"
              className="size-28 object-cover rounded-3xl"
            />
            <span className="text-[1.4rem] line-clamp-4 dark:text-[#1e293b]">
              سایت مقاله یک منبع جامع برای دسترسی به مقالات در موضوعات مختلف
              است. ما بهترین و جدیدترین مقالات علمی، آموزشی و پژوهشی را برای شما
              گردآوری کرده‌ایم تا بتوانید به راحتی به دانش و اطلاعات مورد نیاز
              خود دست یابید.
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[30rem] lg:h-full flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4 item-end">
            <span className="text-[1.4rem] self-end dark:text-[#1e293b]">
              با نظر دادن در مورد سایت مارا همراهی می کنید ممنون میشویم نظر خود
              را بگویید
            </span>
            <textarea
              className="w-[60%] h-20 max-h-64 p-4 rounded-md text-[1.28rem] sm:self-end bg-first/50 placeholder:text-black/50 focus:outline-none"
              type="text"
              placeholder="نظر خود بنویسید..."
            />
            <button className="w-32 h-10 sm:w-52 sm:h-14 rounded-xl bg-second text-first text-[1.2rem] sm:text-[1.4rem] font-light sm:self-end dark:bg-[#334155] active:bg-second/60 active:dark:bg-[#334155]/60">
              ارسال نظر
            </button>
          </div>

          <div className="flex justify-end gap-4">
            <Link href={"/"}>
              <Image
                src={"/images/480687.png"}
                width={100}
                height={100}
                alt="نماد اعتماد الکترونیک"
                className="size-32 lg:size-40 object-cover rounded-3xl"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/1-min.jpg"}
                width={100}
                height={100}
                alt="ساماندهی"
                className="size-32 lg:size-40 object-cover rounded-3xl"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-first font-light  bg-second/60 border-t-1">
        تمامی مطالب سایت مقاله محفوظ است
      </div>
    </div>
  );
};

export default Footer;
