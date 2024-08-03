import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const CmsCommentSendedCart = memo(() => {
  return (
    <div className="w-[32rem] py-10 bg-first dark:bg-[#0d141f]/50 flex flex-col items-center shadow-md">
      <Image
        src={"/images/profile.jpg"}
        alt="product Image"
        width={320}
        height={230}
        className="size-52 rounded-full shadow-md object-cover mb-2 border-1 border-second/50"
      />
      <p className="text-[15px] font-bold mb-12 dark:text-first">حسن مالکی</p>

      <div className="w-full flex flex-col items-end gap-12 px-8">
        <p className="text-[1.3rem] font-light text-black/60 line-clamp-1 self-center dark:text-first/80">
          mahdi@gmail.com
        </p>
        <p className="text-[1.4rem] dark:text-first p-6 rounded-lg bg-black/5 dark:bg-black/20">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
        </p>
        <div className="w-full flex items-center justify-between gap-2 child:shadow-sm">
          <Link
            href={"/products/software/sfdsadfdfds"}
            className="w-full h-14 flex items-center cursor-pointer justify-center text-first text-[1.5rem] font-light border-1 bg-second active:bg-first active:border-second active:text-second rounded-lg"
          >
            پاک کردن
          </Link>
        </div>
      </div>
    </div>
  );
});
export default CmsCommentSendedCart;
