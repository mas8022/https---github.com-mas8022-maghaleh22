import React from "react";
import Title from "../../_components/template/title";
import MessageBoxAuthor from "../../_components/modules/messageBoxAuthor";

const page = () => {
  return (
    <div className="w-full">
      <Title title={"پیام های شما از طرف مدیر"} />
      <div className="w-full p-12 flex flex-col gap-8 bg-second/5 dark:bg-[#0f172a] rounded-3xl">
        <MessageBoxAuthor />
        <MessageBoxAuthor />
        <MessageBoxAuthor />
      </div>
    </div>
  );
};

export default page;
