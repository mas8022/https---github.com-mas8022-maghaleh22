"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import Bg from "../modules/bg";
import { logoutHandler } from "../../../../utils/authTools";

const ProfileBtn = () => {
  const [slideProfile, setSlideProfile] = useState(false);
  const [me, setMe] = useState(false);
  const [isPending, setIsPendingMe] = useState(false);
  useEffect(() => {
    fetch("/api/resetToken")
      .then((res) => {
        if (res.ok) {
          return true
        }
        setIsPendingMe(true)
        return false
      })
      .then((result) => {
        console.log(result);
        setMe(result);
      });
  }, []);

  return (
    <>
      {me ? (
        <>
          <div className="cursor-pointer relative">
            <Image
              onClick={() => setSlideProfile((p) => !p)}
              src="/images/profile.svg"
              width={0}
              height={0}
              alt="profile"
              className="w-[3rem] sm:w-[4rem] h-[3rem] sm:h-[4rem] dark:invert"
            />

            <div
              className={`z-[10000] flex flex-col gap-10 items-center p-10 absolute top-24 -left-20 w-[30rem] bg-first dark:bg-[#111827] border-y-2 border-second rounded-3xl dark:shadow-2xl transition-all duration-300 ${
                slideProfile
                  ? "visible opacity-100 mt-4"
                  : "opacity-0 invisible mt-0"
              }`}
            >
              <Image
                src={"/images/profile.jpg"}
                width={150}
                height={150}
                alt="عکس پروفایل"
                className="size-52 object-cover border-1 border-second rounded-full"
              />
              <div className="w-full flex flex-col gap-6 font-light child:text-[1.4rem] child:font-light child:pb-2 child:text-black/70 dark:child:text-first bg-white/0 child:flex child:items-center child:justify-between child:border-b-1 child:border-b-black/10 dark:child:border-b-[#cbd5e1]/40 child:rounded-b-md child:px-2">
                <Link href={`/profile/${"cgf5esad"}`}>
                  پروفایل
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </Link>
                <Link href={"/myCourses"}>
                  دوره های من
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                    />
                  </svg>
                </Link>
                <Link href={"/favorites"}>
                  علاقه مندی ها
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </Link>
                <div onClick={logoutHandler}>
                  خروج از حساب کاربری
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Bg active={slideProfile} setActive={setSlideProfile} />
        </>
      ) : (
        <>
          <Link
            href={"/login"}
            className="sm:hidden flex p-4 rounded-full bg-second/10 items-center justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={"1.4"}
              stroke="black"
              className="sm:size-10 size-7 active:scale-95 dark:invert"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          </Link>
          <Link
            href={"/login"}
            className={`${
              isPending ? "" : "pointer-events-none"
            } sm:flex hidden w-32 xxm:w-[10rem] md:w-[12rem] h-[2.5rem] xxm:h-[3rem] md:h-[4rem] text-[1.2rem]  xxm:text-[1.3rem] md:text-[1.7rem] rounded-md bg-second/15 active:bg-slate-500/20 items-center justify-center cursor-pointer`}
          >
            ورود/ثبت نام
          </Link>
        </>
      )}
    </>
  );
};

export default ProfileBtn;
