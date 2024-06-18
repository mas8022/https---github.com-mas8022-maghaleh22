"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import dynamic from "next/dynamic";
import SelectInput from "../modules/selectBox";
import SelectItem from "../modules/selectItem";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Editor = dynamic(() => import("../../_components/modules/ck"), {
  ssr: false,
});

const WorkTool = () => {
  const [subject, setSubject] = useState("");
  const [fileData, setFileData] = useState("");

  return (
    <div className="w-full py-20 flex flex-col gap-16">
      <div className="describe w-full px-16 py-10 text-[1.6rem] text-first bg-second/70 rounded-3xl text-center">
        سلام خوش امدین به سایت مقاله در این قسمت شما میتوانید مقاله خود را ارسال
        کنید شما ابتدا باید فورم های زیر را پر کرده سپس مقاله خود را توسط ادیتور
        که در همین صفحه تعویه شده نوشته و حتی با بستن سایت هم اطلاعات شما ذخیره
        میشود و می توانید بعدا ادامه مقاله خود را بنویسید و همچنین میتوانید غیر
        از مقاله فیلم اموزشی خود را نیز اپلود کنید حتی اگر تنها فیلم اموزشی
        دارید باز هم میتوانید بدون مقاله و تنها با فیلم اموزشی خود مقاله خود را
        جهت بررسی برای ما بفرستید و درصورت تایید از سمت ما ان را در سایت منتشر
        می کنیم و به شما اطلاع خواهیم داد
      </div>
      <form className="w-full flex flex-wrap justify-between gap-8">
        <SelectInput id="دسته بندی" label="دسته بندی">
          <SelectItem value={"software"}>نرم افزار و فناوری اطلاعات</SelectItem>
          <SelectItem value={"economics"}>اقتصاد و حسابداری</SelectItem>
          <SelectItem value={"business"}>کسب و کار</SelectItem>
          <SelectItem value={"teenager"}>کودک و نوجوان</SelectItem>
          <SelectItem value={"language"}>اموزش زبان</SelectItem>
          <SelectItem value={"art"}>هنر طراحی</SelectItem>
        </SelectInput>
        <input
          type="text"
          required
          className="w-[30rem] h-[4.2rem] dark:bg-[#0d141f] text-[1.3rem] rounded-md border-1 outline-none border-gray-600/30 px-6 focus:outline-none"
          placeholder="سر تیتر مقاله خود را بنویسید..."
        />
        <div className="flex flex-col w-[35rem] dark:bg-[#0d141f] rounded-md border-1 border-gray-600/30 dark:shadow-2xl">
          <div className="w-full h-[4.2rem]">
            <input
              type="search"
              placeholder="برچسب های مورد نظر خود را وارد کنید..."
              className="w-3/4 h-full rounded-md focus:outline-none px-6 border-b-1 border-gray-600/35 text-[1.3rem] dark:bg-[#0d141f]"
            />
            <button className="w-1/4 h-full bg-second/80 active:bg-second/50  rounded-md text-[1.3rem] font-bold text-first">
              اضافه کردن
            </button>
          </div>
          <div className="w-full flex flex-wrap p-6 gap-5 child:text-[1.2rem] font-light dark:bg-[#121c2c]">
            <span>#مهندس معماری</span>
            <span>#مهندس معماری</span>
            <span>#مهندس معماری</span>
            <span>#مهندس معماری</span>
            <span>#مهندس معماری</span>
          </div>
        </div>
      </form>
      <Editor initialData="<p>در این قسمت مقاله خود را بنویسید</p>" />
      <div className="w-full flex sm:flex-row flex-col items-center gap-8">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          className="xm:w-2/3 w-full h-24 !rounded-3xl flex items-center justify-center !text-[1.4rem] sm:!text-[1.7rem] !font-light !text-first !bg-second/60 !hover:bg-second/80"
        >
          در صورت علاقه فیلم اموزشی خود را اپلود کنید
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => setFileData(e.target.files[0])}
          />
        </Button>
        <div className="w-1/3 h-24 rounded-3xl flex items-center justify-center sm:text-[1.9rem] text-[1.6rem] font-bold bg-second text-first cursor-pointer active:bg-second/80">
          ارسال مقاله
        </div>
      </div>
    </div>
  );
};

export default WorkTool;
