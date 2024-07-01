import React from "react";

const MessageBoxAuthor = () => {
  return (
    <div className="w-full px-12 py-8 flex flex-col gap-4 bg-white dark:bg-[#1e293b] rounded-xl">
      <p className="w-full pb-2 border-b-1 flex items-center justify-between">
        <span className="text-[1.8rem]">از طرف مدیر</span>
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            {" "}
            <div className="p-3 bg-second/5 dark:bg-[#0f172a] rounded-full cursor-pointer active:scale-95 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
            <div className="p-3 bg-second/5 dark:bg-[#0f172a] rounded-full cursor-pointer active:scale-95 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
          </div>
          <span className="text-[1.5rem] font-light">1403/04/01</span>
        </div>
      </p>
      <p className="text-[1.5rem]">
        با سلام، لطفاً تا پایان امروز گزارش عملکرد هفتگی را ارسال فرمایید. با
        تشکر، مدیر سایت
      </p>
    </div>
  );
};

export default MessageBoxAuthor;
