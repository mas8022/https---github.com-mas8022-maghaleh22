"use client"
import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const signUp = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      check: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.fullName.trim() || !isNaN(values.fullName)) {
        errors.fullName = "نام تان را به درستی وارد کنید";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "ایمیل تان را به درستی وارد کنید";
      } else if (values.password.length > 15 || values.password.length < 8) {
        errors.password = "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد";
      } else if (isNaN(values.phone)) {
        errors.phone = "شماره موبایل تان را به درستی وارد کنید";
      } else if (!values.check) {
        errors.check = "تیک تایید قوانین سایت را بزنید";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);
      setTimeout(async () => {
        await fetch("/api/signUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then((res) => {
          if (res.ok) {
         
            location.pathname = '/'
          } else {
            toast.error("اینترنت خود را چک کنید");
          }
          setLoading(false);
        });
        values.fullName = "";
        values.email = "";
        values.password = "";
        values.phone = "";
        values.check = false;
        setSubmitting(false);
      }, 3000);
    },
  });
  return (
    <>
      <form
        className="bg-second/30 rounded-lg w-[100%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-[40rem] flex flex-col gap-7 p-[2rem] sm:p-[3rem] md:sm:p-[5rem]  py-[4rem] items-center justify-center"
        onSubmit={signUp.handleSubmit}
      >
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="fullName"
          name="fullName"
          type="text"
          onChange={signUp.handleChange}
          value={signUp.values.fullName}
          placeholder="نام و نام خانوادگی"
        />
        {signUp.touched.fullName &&
          signUp.errors.fullName &&
          signUp.errors.fullName}
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="email"
          name="email"
          type="text"
          onChange={signUp.handleChange}
          value={signUp.values.email}
          placeholder="ایمیل"
        />
        {signUp.touched.email && signUp.errors.email && signUp.errors.email}
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="password"
          name="password"
          type="text"
          onChange={signUp.handleChange}
          value={signUp.values.password}
          placeholder="رمز عبور"
        />
        {signUp.touched.password &&
          signUp.errors.password &&
          signUp.errors.password}
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="phone"
          name="phone"
          type="text"
          onChange={signUp.handleChange}
          value={signUp.values.phone}
          placeholder="شماره موبایل"
        />
        {signUp.touched.phone && signUp.errors.phone && signUp.errors.phone}
        <div className="w-full h-[2rem] px-[0.5rem] flex items-center">
          <p className="text-[1.2rem]">
            ایا موافق با
            <Link href={"/regulation"} className="text-blue-600 font-bold text-[1.4rem]">{" "}
              قوانین
            </Link>{" "}
            این سایت هستید
          </p>
          <Checkbox
            name="check"
            onChange={signUp.handleChange}
            value={signUp.values.check}
            className="w-[3rem] h-[3rem]"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
          />
        </div>
        {signUp.touched.check && signUp.errors.check && signUp.errors.check}
        <button
          type="submit"
          className="w-full rounded-lg border-0 h-[4.5rem] bg-second/70 text-[1.8rem] active:bg-emerald-700/20 text-first flex items-center justify-center"
        >
          {loading ? (
            <MoonLoader size={20} color="#fff" />
          ) : (
            <span> ثبت نام</span>
          )}
        </button>
      </form>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}
