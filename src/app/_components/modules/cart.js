import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const Cart = memo(({ studentCount, btnMode }) => {
  return (
    <div className="w-[32rem] h-[32.5rem] bg-first dark:bg-[#374151] flex flex-col shadow-md rounded-xl overflow-hidden">
      <Image
        src={"/images/teacher.jpg"}
        alt="product Image"
        width={320}
        height={230}
        className="w-full h-60 mb-5 object-cover"
      />
      <h2 className="px-10 text-[15px] font-bold mb-12 line-clamp-1 dark:text-first">
        اموزش زبان انگیسی از صفر تا صد
      </h2>

      <div className="w-full flex justify-between px-10 items-center gap-2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[13px] text-black/60 dark:text-first/60">
            استاد همایون حسینی
          </span>
          <span className="text-[13px] text-black/60 dark:text-first/60 mt-2">
            10 ساعت و 18 دقیقه
          </span>
          {studentCount && (
            <div className="flex items-end justify-start gap-2 self-start">
              <Image
                src={"/images/student.svg"}
                width={50}
                height={50}
                alt="تعداد دانشجو"
                className="size-10 object-cover dark:invert"
              />
              <span className="text-[1.4rem] font-light">57</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-end gap-4">
          <p className="text-end w-[10rem] text-[1.3rem] text-black/80 dark:text-first/80 font-light">
            <span className="line-through">230,000</span> <span>120,000</span>
            تومان
          </p>
          {btnMode === "draft" ? (
            <Link
              href={"/coWorker/draftedProject/fsdsdds"}
              className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 dark:border-second bg-second active:bg-first dark:active:bg-first/0 active:border-second active:text-second rounded-lg"
            >
              ادامه
            </Link>
          ) : btnMode === "edit" ? (
            <Link
              href={"/coWorker/myProjects/fsdsdds"}
              className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 dark:border-second bg-second active:bg-first dark:active:bg-first/0 active:border-second active:text-second rounded-lg"
            >
              ویرایش
            </Link>
          ) : (
            <Link
              href={"/products/software/sfdsadfdfds"}
              className="w-32 h-14 flex items-center justify-center text-first text-[1.5rem] font-light border-1 dark:border-second bg-second active:bg-first dark:active:bg-first/0 active:border-second active:text-second rounded-lg"
            >
              مشاهده
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

export default Cart;
