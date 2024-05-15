import Image from "next/image";
import React from "react";
import Link from "next/link";
import SidBar from "./sidbar";
import connectToDb from "@/configs/db";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/auth";
import userModel from "@/models/user";

export default async function Navbar() {
  let log = false;
  connectToDb();
  const token = cookies().get("token")?.value;
  const tokenPayload = verifyToken(token);
  const user = await userModel.findOne({ email: tokenPayload?.email }, "_id");
  if (user) {
    log = true;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-[5rem] md:h-[8rem] shadow-md flex items-center justify-between px-6 sm:px-[5rem] md:px-[10rem] xl:px-[15rem] bg-white z-[1000]">
      <ul className="gap-3 sm:gap-6 md:gap-7 text-[1.25rem] md:text-[1.6rem]  hidden sm:flex">
        <Link href={"/"}>خانه</Link>
        <Link href={"/cost"}>نرخ ترجمه</Link>
        <Link href={"/coWorker"}>همکاری باما</Link>
        <Link href={"/contactUs"}>تماس با ما</Link>
        <Link href={"/aboutUs"}>درباره ما</Link>
      </ul>

      <SidBar />

      <div className="flex gap-4 sm:gap-8 md:gap-10 items-center">
        {log ? (
          <Link href={`/profile/${"cgf5esad"}`}>
            <Image
              src="/images/profile.svg"
              width={0}
              height={0}
              alt="profile"
              className="w-[3rem] sm:w-[4rem] h-3rem] sm:h-[4rem] "
            ></Image>
          </Link>
        ) : (
          <Link
            href={"/login"}
            className="w-[10rem] md:w-[12rem] h-[3rem] md:h-[4rem] text-[1.3rem] md:text-[1.7rem] rounded-md bg-second/15 active:bg-slate-500/20 flex items-center justify-center cursor-pointer active:text-emerald-600"
          >
            ورود/ثبت نام
          </Link>
        )}

        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="site logo"
            width={60}
            height={60}
            className="w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem] cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
