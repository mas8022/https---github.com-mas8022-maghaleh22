"use client";
import useSanitizeInput from "@/utils/useSanitizeInput";
import React from "react";

const Input = (
  name,
  formHandler,
  customClasses = "",
  placeholder = "",
  type = "text"
) => {
  return (
    <input
      name={name}
      type={type}
      onChange={(e) => {
        const sanitizedValue = useSanitizeInput(e.target.value);
        formHandler.setFieldValue(name, sanitizedValue);
      }}
      value={formHandler.values.name}
      placeholder={placeholder}
      className={customClasses}
    />
  );
};

export default Input;
