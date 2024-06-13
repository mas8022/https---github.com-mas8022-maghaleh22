"use client"
import React, { createContext } from "react";
const context = createContext();

const ContextProvider = ({ children }) => {
  const values = {};

  return <context.Provider value={values}>{children}</context.Provider>;
};

export default ContextProvider;
