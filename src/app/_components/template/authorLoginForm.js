import { useFormik } from "formik";
import React, { useState } from "react";

const AuthorLoginForm = ({ setFormMode }) => {
  const [loading, setLoading] = useState(false);

  const authorLogin = useFormik({
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
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      setTimeout(async () => {
        await fetch("/api/authorLogin", {
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
    <form
      className="lgg:w-full ld:w-3/5 xm:w-4/5 w-full flex flex-col gap-7 p-[2rem] sm:p-[3rem] md:sm:p-[5rem]  py-[4rem] items-center bg-second/30 dark:bg-black/30 dark:shadow-2xl rounded-3xl child:h-16 child:outline-none child:focus:outline-none"
      onSubmit={authorLogin.handleSubmit}
    >
      <input
        className="w-full rounded-lg border-0 px-[1.5rem] text-[1.3rem] bg-white dark:bg-[#1e293b] text-black/70 dark:text-[#e2e8f0]"
        id="email"
        name="email"
        type="text"
        onChange={authorLogin.handleChange}
        value={authorLogin.values.email}
        placeholder="ایمیل"
      />
      {authorLogin.touched.email &&
        authorSignUp.errors.email &&
        authorSignUp.errors.email}

      <input
        className="w-full rounded-lg border-0 px-[1.5rem] text-[1.3rem] bg-white dark:bg-[#1e293b] text-black/70 dark:text-[#e2e8f0]"
        id="password"
        name="password"
        type="text"
        onChange={authorLogin.handleChange}
        value={authorLogin.values.password}
        placeholder="رمز عبور"
      />
      {authorLogin.touched.password &&
        authorSignUp.errors.password &&
        authorSignUp.errors.password}

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
        <span
          onClick={() => setFormMode("signUpForm")}
          className="text-blue-700 cursor-pointer"
        >
          ثبت نام
        </span>{" "}
        کنید
      </p>
    </form>
  );
};

export default AuthorLoginForm;
