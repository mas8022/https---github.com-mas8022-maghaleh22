import React from "react";
import CmsSideBar from "../_components/modules/cmsSideBar";
import CmsNavbar from "../_components/modules/cmsNavbar";

const layout = ({ children }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 overflow-y-scroll bg-first dark:bg-[#1e293b] z-[2000] flex">
      <CmsSideBar />
      <div className="sm:w-5/6 w-full h-screen overflow-y-scroll relative">
        <CmsNavbar />
        <div className="w-full sm:p-12 p-6">{children}</div>
      </div>
    </div>
  );
};

export default layout;
