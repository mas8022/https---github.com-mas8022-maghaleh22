import React from "react";
import CmsSideBar from "../components/modules/cmsSideBar";
import CmsNavbar from "../components/modules/cmsNavbar";

const layout = ({ children }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 overflow-y-scroll bg-first z-[2000] flex">
      <CmsSideBar />
      <div className="sm:w-5/6 w-full h-screen overflow-y-scroll relative">
        <CmsNavbar />
        <div className="w-full p-12">{children}</div>
      </div>
    </div>
  );
};

export default layout;
