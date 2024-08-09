import WorkTool from "@/src/app/_components/modules/workTool";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <WorkTool apiPath={"myProjects"} />
    </div>
  );
};

export default page;
