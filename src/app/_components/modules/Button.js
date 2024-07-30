import React from "react";
import { MoonLoader } from "react-spinners";

export default function Button({
  buttonType = "button",
  label = "",
  customclassName = "",
  loader = false,
  clickHandler = () => {},
}) {
  return (
    <button type={buttonType} onClick={clickHandler} className={customclassName}>
      {loader ? <MoonLoader size={20} color="#fff" /> : <span>{label}</span>}
    </button>
  );
}
