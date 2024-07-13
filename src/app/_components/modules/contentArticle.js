"use client";

import React from "react";
import DOMPurify from "dompurify";

const ContentArticle = () => {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize("<div>mohammad</div>"),
      }}
    ></div>
  );
};

export default ContentArticle;
