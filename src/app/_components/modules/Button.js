"use client";
import React, { memo } from "react";
import { MoonLoader } from "react-spinners";

const Button = memo(
  ({
    buttonType = "button",
    label = "",
    customclass = "",
    loader = false,
    func = () => {},
    children,
  }) => {
    return (
      <button type={buttonType} onClick={() => func()} className={customclass}>
        {loader ? (
          <MoonLoader size={20} color="#fff" />
        ) : children ? (
          children
        ) : (
          <span>{label}</span>
        )}
      </button>
    );
  }
);

export default Button;
