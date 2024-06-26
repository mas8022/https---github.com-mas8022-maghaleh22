import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full border-b-1 border-b-second/50 font-bold text-[2rem] sm:text-[2.2rem] md:text-[2.4rem]  lg:text-[2.6rem] pb-1 tracking-tight mb-8">
      {title}
    </div>
  );
};

export default Title;
