import React from "react";
import SignUp from "../components/template/signUp";
import Login from "../components/template/login";
import { isMe } from "@/utils/me";
import Image from "next/image";

export default async function page() {
  const me = await isMe();

  return (
    <div
      src={"/images/abstract-background-pastel-colors_627230-60.avif"}
      className="w-full h-screen flex items-center justify-center"
    >
      {me ? <Login /> : <SignUp />}
    </div>
  );
}
