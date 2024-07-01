import React from "react";
import Employment from "../_components/template/employment";
import WorkTool from "../_components/template/workTool";
import Hr from "../_components/modules/hr";
import { isMe } from "../../../utils/me";

const CoWorker = async () => {
  const user = await isMe();

  return (
    <>
      <div className="w-full">{user ? <WorkTool /> : <Employment />}</div>
      <Hr />
    </>
  );
};

export default CoWorker;
