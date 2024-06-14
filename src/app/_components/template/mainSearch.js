import React from "react";

const MainSearch = () => {
  return (
    <div className="w-full ld:py-32 py-16 border-y-1 border-y-second/90 bg-second/10 flex flex-col ld:gap-20 gap-12 items-center justify-center rounded-3xl">
      <p className="ld:text-[3.1rem] text-[2.5rem] font-light text-black/60">دنبال چه اموزشی هستید؟</p>
      <div className="ld:w-[62%] xm:w-[55%] w-[80%] ld:h-24 h-16 flex overflow-hidden ld:rounded-3xl rounded-lg">
        <button className="ld:w-1/6 w-2/6 h-full bg-second text-first ld:text-[1.9rem] text-[1.5rem] ld:font-bold font-light active:bg-second/50">
          جستجو
        </button>
        <input type="search" className="w-full sm:px-8 px-5 sm:text-[1.8rem] text-[1.4rem] font-light focus:outline-none outline-none"/>
      </div>
    </div>
  );
};

export default MainSearch;
