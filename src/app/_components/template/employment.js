"use client";
import Image from "next/image";
import React, { useState } from "react";
import Hr from "../modules/hr";
import AuthorSignUpForm from "./authorSignUpForm";
import AuthorLoginForm from "./authorLoginForm";

const authorSignUp = () => {
  const [formMode, setFormMode] = useState("loginForm");

  return (
    <>
      <div className="w-full flex gap-10 sm:pt-0 pt-20">
        <div className="lgg:w-1/2 w-full flex flex-col gap-5 items-center justify-center">
          {formMode === "signUpForm" ? (
            <AuthorSignUpForm setFormMode={setFormMode} />
          ) : (
            <AuthorLoginForm setFormMode={setFormMode} />
          )}
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

export default authorSignUp;
