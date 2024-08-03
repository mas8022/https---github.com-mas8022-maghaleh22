import React, { memo } from "react";
import Title from "../../_components/template/title";
import Cart from "../../_components/modules/cart";

const page = memo(() => {
  return (
    <div className="w-full">
      <Title title={"پروژهای تمام نشده"} />

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
          <Cart studentCount={false} btnMode={"draft"} />
        </div>
      </div>
    </div>
  );
});

export default page;
