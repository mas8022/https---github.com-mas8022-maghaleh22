import React from "react";

import WorkTool from "../components/template/workTool";
import DoNotWork from "../components/template/dontWork";
import Hr from "../components/modules/hr";

const CoWorker = () => {
  return (
    <>
      <div className="w-full">{false ? <WorkTool /> : <DoNotWork />}</div>
      <Hr />
    </>
  );
};

export default CoWorker;
