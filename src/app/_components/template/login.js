"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!emailRegex.test(values.email)) {
        errors.email = "ایمیل تان را به درستی وارد کنید";
      } else if (values.password.length > 15 || values.password.length < 8) {
        errors.password = "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);
      setTimeout(async () => {
        await fetch("/api/login", {
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
      <form
        className="bg-second/20 rounded-lg w-[100%] sm:w-[70%] md:w-[60%] lg:w-[45%] flex flex-col gap-7 p-[2rem] sm:p-[3rem] md:sm:p-[5rem]  py-[4rem] items-center"
        onSubmit={login.handleSubmit}
      >
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="email"
          name="email"
          type="text"
          onChange={login.handleChange}
          value={login.values.email}
          placeholder="ایمیل"
        />
        {login.touched.email && login.errors.email && login.errors.email}
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="password"
          name="password"
          type="text"
          onChange={login.handleChange}
          value={login.values.password}
          placeholder="رمز عبور"
        />
        {login.touched.password &&
          login.errors.password &&
          login.errors.password}

        <button
          type="submit"
          className="w-full rounded-lg border-0 h-[4.5rem] bg-emerald-700/50 text-[1.8rem] active:bg-emerald-700/20 text-white flex items-center justify-center"
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
