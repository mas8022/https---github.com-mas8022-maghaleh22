import React from "react";

import WorkTool from "../components/template/workTool";
import DoNotWork from "../components/template/dontWork";
import Hr from "../components/modules/hr";
import { isMe } from "@/utils/me";

const CoWorker = async () => {
  const user = await isMe();

  return (
    <>
      <div className="w-full">{user ? <WorkTool /> : <DoNotWork />}</div>
      <Hr />
    </>
  );
};

export default CoWorker;
