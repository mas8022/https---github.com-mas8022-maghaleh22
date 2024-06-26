"use client";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hr from "../modules/hr";

const Employment = () => {
  const [loading, setLoading] = useState(false);

  const employment = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.phone.trim() || !isNaN(values.phone)) {
        errors.phone = "شماره همراهتان را به درستی وارد کنید";
      } else if (!values.name.trim() || !isNaN(values.name)) {
        errors.name = "نام تان را به درستی وارد کنید";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "ایمیل تان را به درستی وارد کنید";
      } else if (values.password.length > 15 || values.password.length < 8) {
        errors.password = "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      setTimeout(async () => {
        await fetch("/api/employment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then((res) => {
          if (res.ok) {
            location.pathname = "/";
          } else {
            toast.error("اینترنت خود را چک کنید");
          }
          setLoading(false);
        });
        values.email = "";
        values.password = "";
        setSubmitting(false);
      }, 3000);
    },
  });

  return (
    <>
      {" "}
      <div className="w-full flex gap-10 sm:pt-0 pt-20">
        <div className="lgg:w-1/2 w-full flex flex-col gap-5 items-center">
          <p className="describe w-full p-8 text-[1.4rem] font-light dark:bg-[#0f172a] leading-[27px] dark:text-first text-justify shadow-md dark:shadow-2xl rounded-3xl">
            ممنون از علاقه‌مندی‌تان به همکاری با سایت مقالات ما. برای تکمیل
            فرآیند ثبت‌نام و بررسی اولیه، لطفاً ابتدا قوانین سایت را به دقت
            مطالعه کنید و پس از قبول شرایط، فرم ثبت‌نام را پر کنید. همچنین لازم
            است یک عکس واضح از خودتان ارسال کنید که در آن کارت ملی خود را در دست
            راست و متنی از{" "}
            <Link
              href={"/employmentRule"}
              className="text-[1.5rem] font-bold text-blue-600"
            >
              قوانین سایت
            </Link>{" "}
            که بر روی برگه نوشته‌اید را در دست چپ داشته باشید. این عکس جهت تأیید
            هویت و موافقت شما با قوانین سایت الزامی است.
          </p>

          <form
            className="lgg:w-full ld:w-3/5 xm:w-4/5 w-full flex flex-col gap-7 p-[2rem] sm:p-[3rem] md:sm:p-[5rem]  py-[4rem] items-center bg-second/30 dark:bg-black/30 dark:shadow-2xl rounded-3xl child:h-16 child:outline-none child:focus:outline-none"
            onSubmit={employment.handleSubmit}
          >
            <input
              className="w-full rounded-lg border-0 px-[1.5rem] text-[1.3rem] bg-white dark:bg-[#1e293b] text-black/70 dark:text-[#e2e8f0]"
              id="name"
              name="name"
              type="text"
              onChange={employment.handleChange}
              value={employment.values.name}
              placeholder="نام و نام خانوادگی"
            />
            {employment.touched.name &&
              employment.errors.name &&
              employment.errors.name}
            <input
              className="w-full rounded-lg border-0 px-[1.5rem] text-[1.3rem] bg-white dark:bg-[#1e293b] text-black/70 dark:text-[#e2e8f0]"
              id="email"
              name="email"
              type="text"
              onChange={employment.handleChange}
              value={employment.values.email}
              placeholder="ایمیل"
            />
            {employment.touched.email &&
              employment.errors.email &&
              employment.errors.email}
            <input
              className="w-full rounded-lg border-0 px-[1.5rem] text-[1.3rem] bg-white dark:bg-[#1e293b] text-black/70 dark:text-[#e2e8f0]"
              id="phone"
              name="phone"
              type="text"
              onChange={employment.handleChange}
              value={employment.values.phone}
              placeholder="شماره همراه"
            />
            {employment.touched.phone &&
              employment.errors.phone &&
              employment.errors.phone}
            <input
              className="w-full rounded-lg border-0 px-[1.5rem] text-[1.3rem] bg-white dark:bg-[#1e293b] text-black/70 dark:text-[#e2e8f0]"
              id="password"
              name="password"
              type="text"
              onChange={employment.handleChange}
              value={employment.values.password}
              placeholder="رمز عبور"
            />
            {employment.touched.password &&
              employment.errors.password &&
              employment.errors.password}

            <label
              htmlFor="fileInput"
              className="w-full bg-second/70 text-first text-[1.5rem] font-light rounded-lg flex items-center justify-center"
            >
              بارگذاری عکس طبق قوانین بالا
              <input type="file" id="fileInput" hidden />
            </label>

            <button
              type="submit"
              className="w-full rounded-lg border-0 h-[4.5rem] text-[1.8rem] bg-second active:bg-second/70 text-white flex items-center justify-center"
            >
              {loading ? (
                <MoonLoader size={20} color="#fff" />
              ) : (
                <span> ثبت نام</span>
              )}
            </button>
            <p className="text-[1.4rem] dark:text-first">
              در صورت نداشتن حساب کاربری{" "}
              <Link href={"/signUp"} className="text-blue-700">
                ثبت نام
              </Link>{" "}
              کنید
            </p>
          </form>
        </div>
        <Image
          src={"/images/aboutUsTitle.png"}
          width={500}
          height={500}
          alt="استخدام"
          className="w-1/2 object-cover lgg:block hidden"
        />
      </div>
      <Hr />
    </>
  );
};

export default Employment;
