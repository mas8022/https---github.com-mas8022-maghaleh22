import React from "react";
import Title from "../_components/template/title";
// import Cart from "../_components/modules/cart";
import Hr from "../_components/modules/hr";
const page = () => {
  return (
    <div className="w-full bg-first dark:bg-[#1e293b]">
      <Title title={"دوره های مورد علاقه شما"} />
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
          {/* <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart /> */}
        </div>
      </div>
      <Hr />
    </div>
  );
};

export default page;
