import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoNotWork = () => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center gap-8">
      <Image src={'/images/coWorker.jpg'} width={500} height={500} alt='مچاز نبودن' className="object-cover rounded-3xl"/>
      <p className="xm:text-[2.1rem] xxm:text-[1.8rem] text-[1.6rem] text-black/70 font-light text-center">
        برای همکاری با ما ابتدا باید در سایت ثبت نام کنید
      </p>
      <Link href={'/login'} className="flex items-center justify-center sm:px-14 xxm:px-8 px-6 sm:py-7 xxm:py-6 py-4 sm:text-[1.8rem] xxm:text-[1.4rem] text-[1.3rem] font-light text-first bg-second rounded-3xl active:bg-first border-1 border-first active:border-second active:text-second">
        ورود / ثبت نام
      </Link>
    </div>
  );
};

export default DoNotWork;
