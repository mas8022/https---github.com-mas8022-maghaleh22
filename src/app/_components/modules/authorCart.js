import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const AuthorNotVerified = memo(() => {
  return (
    <div className="w-[32rem] h-[32.5rem] pt-14 bg-first dark:bg-[#0d141f]/50 flex flex-col items-center shadow-md rounded-xl overflow-hidden">
      <Image
        src={"/images/profile.jpg"}
        alt="product Image"
        width={320}
        height={230}
        className="size-52 rounded-full shadow-md object-cover mb-2 border-1 border-second/50"
      />
      <h2 className="px-10 text-[15px] font-bold mb-12 line-clamp-1 dark:text-first">
        استاد حسین احمدی
      </h2>

      <div className="w-full flex flex-col items-end gap-12 px-8">
        <p className="text-[1.3rem] font-light text-black/60 line-clamp-1 self-center dark:text-first/80">
          مدرس علوم پایه و نرم افزار
        </p>
        <div className="w-full flex items-center justify-between gap-2 child:shadow-sm">
          <Link
            href={"/products/software/sfdsadfdfds"}
            className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
          >
            مشاهده
          </Link>
          <Link
            href={"/products/software/sfdsadfdfds"}
            className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
          >
            ارسال پیام
          </Link>
          <Link
            href={"/products/software/sfdsadfdfds"}
            className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
          >
            مسدود
          </Link>
        </div>
      </div>
    </div>
  );
});

export default AuthorNotVerified;
