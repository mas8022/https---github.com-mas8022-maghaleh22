"use client";
import React, { useEffect, useState } from "react";

export default function Scroller() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition > 1000 ? (
    <>
      <div
        onClick={() => scrollTo(0, 0)}
        className="active:scale-95 bg-second/30 w-[4rem] h-[4rem] rounded-[50%] z-10 fixed bottom-[6rem] right-8 sm:right-14 md:right-48 flex items-center justify-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 stroke-second"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </>
  ) : null;
}
