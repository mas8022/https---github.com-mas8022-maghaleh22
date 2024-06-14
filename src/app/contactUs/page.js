import React from "react";
import Hr from "../_components/modules/hr";
import ContactUsBoxContainer from "../_components/template/contactUsBoxContainer";

export default function ContactUs() {
  return (
    <div className="w-full pt-16 flex flex-col items-center gap-3">
      <p className="text-[3rem] font-bold shadow-sm">تماس با ما</p>
      <p className="text-[1.7rem] text-gray-700/70 dark:text-first/50 font-bold mb-10">
        هر سوال یا نظری دارید؟ برای ما پیام بنویسید
      </p>
      <ContactUsBoxContainer />
      <Hr />
    </div>
  );
}
