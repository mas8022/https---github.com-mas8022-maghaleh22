import React from "react";
import Title from "./title";
import Cart from "../modules/cart";

const DraftedProject = () => {
  return (
    <div className="w-full">
      <Title title={"پروژهای تمام نشده"} />

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default DraftedProject;
