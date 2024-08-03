import React, { memo } from "react";
import { MoonLoader } from "react-spinners";

const Button = memo(
  ({
    buttonType = "button",
    label = "",
    customclassName = "",
    loader = false,
    clickHandler = () => {},
  }) => {
    return (
      <button
        type={buttonType}
        onClick={clickHandler}
        className={customclassName}
      >
        {loader ? <MoonLoader size={20} color="#fff" /> : <span>{label}</span>}
      </button>
    );
  }
);

export default Button;
