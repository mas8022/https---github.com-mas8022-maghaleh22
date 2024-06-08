"use client";

const { useState } = require("react");

const Input = ({ id = "", label = "" }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-[27rem] sm:w-[24rem] xxl:w-[30rem] h-16 peer p-3 text-[1.4rem] text-gray-700 outline-none border border-gray-200 rounded-lg hover:border-gray-300 focus:border-second`}
      />
      <label
        htmlFor={id}
        className={`absolute right-3 h-max top-0 m-auto  text-gray-400 peer-focus:text-second pointer-events-none transition-all ${
          !!value.length
            ? "px-1 bg-white bottom-full text-[1.35rem]"
            : "text-[1.35rem] bottom-0 cursor-text peer-focus:px-1 peer-focus:bg-white peer-focus:bottom-full peer-focus:text-[1.1rem]"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
