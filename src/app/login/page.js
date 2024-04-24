import React from "react";
import SignUp from "../components/template/signUp";
import Login from "../components/template/login";
import { isMe } from "@/utils/me";

export default async function page() {

  
  const me = await isMe();



  return (
    <div className="w-full h-[87vh] flex items-center justify-center">
      {me ? <Login /> : <SignUp />}
    </div>
  );
}
