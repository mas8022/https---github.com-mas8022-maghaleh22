import React from "react";
import { isMe } from "@/utils/me";
import Employment from "../_components/template/employment";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await isMe();

  if (user) {
    return redirect("coWorker/workTool");
  }

  return <Employment />;
};

export default page;
