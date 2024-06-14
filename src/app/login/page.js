import React from "react";
import SignUp from "../_components/template/signUp";
import Login from "../_components/template/login";
import { isMe } from "@/utils/me";
import Image from "next/image";

export default async function page() {
  const me = await isMe();

  return (
    <div
      src={"/images/abstract-background-pastel-colors_627230-60.avif"}
      className="w-full flex items-center justify-center lg:justify-start gap-32 lgg:p-0 py-32"
    >
      {me ? <Login /> : <SignUp />}
      <Image
        src={"/images/login.jpg"}
        width={1000}
        height={1000}
        alt="login image"
        className="w-1/2 object-cover lg:block hidden"
      />
    </div>
  );
}
