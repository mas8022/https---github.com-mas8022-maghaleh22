"use client";
import React, { memo } from "react";
import DOMPurify from "dompurify";

const ContentArticle = memo(() => {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize("<div>mohammad</div>"),
      }}
    ></div>
  );
});
export default ContentArticle;
