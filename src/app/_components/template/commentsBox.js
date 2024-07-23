import React from "react";
import TagsBox from "./tagsBox";
import Comment from "./comment";

const CommentsBox = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-10">
      <div className="w-full sm:w-2/3 flex flex-col justify-between gap-8 items-center px-12 py-8 pb-12 rounded-3xl overflow-hidden shadow-lg dark:shadow-2xl">
        <div className="w-full h-20 flex justify-between gap-8 items-center border-b-[1px] border-second/50">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16 dark:invert"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <span className="text-[2rem] font-bold dark:text-first">نظرات</span>
          </div>
          <span className="text-[1.4rem] dark:text-first">تعداد نظرات (21)</span>
        </div>

        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>

      <TagsBox />
    </div>
  );
};

export default CommentsBox;
