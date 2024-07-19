import React from "react";
import { MoonLoader } from "react-spinners";

export default function Button({
  buttonType = "button",
  label = "",
  customClass = "",
  loader = false,
  clickHandler = () => {},
}) {
  return (
    <button type={buttonType} onClick={clickHandler} className={customClass}>
      {loader ? <MoonLoader size={20} color="#fff" /> : <span>{label}</span>}
    </button>
  );
}
