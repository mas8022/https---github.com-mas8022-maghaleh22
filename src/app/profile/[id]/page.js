"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import Uploader from "../../_components/modules/uploader";
import Hr from "../../_components/modules/hr";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function page({ params }) {
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState("");
  const editProfile = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.fullName.trim() || !isNaN(values.fullName)) {
        errors.fullName = "نام تان را به درستی وارد کنید";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "ایمیل تان را به درستی وارد کنید";
      } else if (isNaN(values.phone)) {
        errors.phone = "شماره موبایل تان را به درستی وارد کنید";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setLoading(true);
      setTimeout(async () => {
        await fetch(`/api/editProfile/${params.id}`, {
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
        values.fullName = "";
        values.email = "";
        values.phone = "";
        setSubmitting(false);
      }, 3000);
    },
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center mt-12">
        <div className="w-[20rem] h-[20rem] rounded-full !z-10">
          <Uploader
            className="z-10"
            label={"ویرایش"}
            setFileData={setFileData}
          />
        </div>
      </div>

      <form
        className="mt-[6rem] bg-second/30 rounded-lg w-[100%] sm:w-[70%] md:w-[60%] lg:w-[45%] flex flex-col gap-7 p-[2rem] sm:p-[3rem] md:sm:p-[5rem]  py-[4rem] items-center"
        onSubmit={editProfile.handleSubmit}
      >
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="fullName"
          name="fullName"
          type="text"
          onChange={editProfile.handleChange}
          value={editProfile.values.fullName}
          placeholder="نام و نام خانوادگی"
        />
        {editProfile.touched.fullName &&
          editProfile.errors.fullName &&
          editProfile.errors.fullName}
        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="email"
          name="email"
          type="text"
          onChange={editProfile.handleChange}
          value={editProfile.values.email}
          placeholder="ایمیل"
        />
        {editProfile.touched.email &&
          editProfile.errors.email &&
          editProfile.errors.email}

        <input
          className="w-full rounded-lg bg-white border-0 h-[3rem] px-[1.5rem] text-[1.3rem] text-black/70"
          id="phone"
          name="phone"
          type="text"
          onChange={editProfile.handleChange}
          value={editProfile.values.phone}
          placeholder="شماره موبایل"
        />
        {editProfile.touched.phone &&
          editProfile.errors.phone &&
          editProfile.errors.phone}
        <button
          type="submit"
          className="w-full rounded-lg border-0 h-[4.5rem] bg-second/60 text-[1.8rem] active:bg-second/50 text-first flex items-center justify-center"
        >
          {loading ? (
            <MoonLoader size={20} color="#fff" />
          ) : (
            <span> ویرایش اطلاعات </span>
          )}
        </button>
      </form>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Hr/>
    </div>
  );
}
