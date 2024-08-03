import React, { memo, useEffect } from "react";

const Bg = memo(() => {
  useEffect(() => {
    const closeSideBarHandler = (e) => {
      if (e.target.contains(document.querySelector(".bgActive"))) {
        setActive(false);
      }
    };
    window.addEventListener("click", (e) => {
      closeSideBarHandler(e);
    });
    return () => window.removeEventListener("click", closeSideBarHandler);
  }, []);

  return (
    <div
      className={
        active
          ? "bgActive w-full h-full z-0 bg-black/20 fixed top-0 left-0 backdrop-blur-[1px] transition-all duration-1000"
          : "hidden transition-all duration-1000"
      }
    ></div>
  );
});

export default Bg;
