import React from "react";

import WorkTool from "../_components/template/workTool";
import DoNotWork from "../_components/template/dontWork";
import Hr from "../_components/modules/hr";
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
