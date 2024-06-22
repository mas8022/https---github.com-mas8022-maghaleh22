"use client";
import React, { useState } from "react";

import WorkToolNav from "./workToolNav";
import NewProject from "./newProject";
import DraftedProject from "./draftedProject";
import MyProject from "./myProject";

const WorkTool = () => {
  const [pageName, setPageName] = useState("newProject");

  return (
    <div className="w-full sm:pt-0 pt-12">
      <WorkToolNav pageName={pageName} setPageName={setPageName} />

      {pageName === "newProject" ? (
        <NewProject />
      ) : pageName === "draftedProject" ? (
        <DraftedProject />
      ) : (
        <MyProject />
      )}
    </div>
  );
};

export default WorkTool;
