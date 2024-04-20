import React from "react";

export default function Bg({ active }) {
  return (
    <div
      className={
        active ? "bgActive w-full h-full z-0 bg-black/20 fixed top-0 left-0" : "hidden"
      }
    ></div>
  );
}
