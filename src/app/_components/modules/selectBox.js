import useToggle from "../../../../utils/toggle";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

const SelectInput = ({ id = "", label: label = "", children }) => {
  const [value, setValue] = useState(null);
  const [isOpen, toggleOpen] = useToggle("selectBox");

  const onSelectOption = (event) => {
    const value = event.target.dataset.value;
    const name = event.target.innerHTML;

    if (value) {
      setValue({
        value,
        name: name || value,
      });
    } else {
      event.stopPropagation();
    }
  };

  return (
    <div className="relative !h-16 w-[27rem] sm:w-[24rem] xxl:w-[30rem] dark:bg-[#0d141f]">
      <input
        onClick={(event) => toggleOpen(event)}
        className={`select-appearance-none w-full h-full flex items-center justify-between peer p-3 text-sm text-gray-700 outline-none border border-gray-200 dark:border-red-50/0 rounded-lg hover:border-gray-300 focus:border-second/50 dark:focus:border-first/0 cursor-pointer caret-transparent dark:bg-[#0d141f]`}
        value={""}
      />
      <label
        htmlFor={id}
        className={`absolute right-3 h-max top-0 m-auto text-gray-400 peer-focus:text-second dark:peer-focus:text-first pointer-events-none transition-all ${
          isOpen || !!value
            ? "px-1 bg-white dark:bg-[#1e293b] bottom-full text-[1.2rem]"
            : "text-[1.3rem] bottom-0 cursor-text peer-focus:px-1 peer-focus:bg-white dark:peer-focus:bg-[#1e293b] peer-focus:bottom-full peer-focus:text-xs"
        }`}
      >
        {label}
      </label>
      <div className="absolute inset-0 pointer-events-none p-3 flex items-center justify-between text-gray-500">
        <span
          className="text-[1.3rem] flex items-center gap-x-2"
          dangerouslySetInnerHTML={{ __html: value?.name || "" }}
        ></span>
        <HiOutlineChevronDown
          className={`${isOpen ? "rotate-180" : ""} size-6`}
        />
      </div>
      <div
        className={`absolute left-0 right-0 top-full p-2 bg-white dark:bg-[#121c2c] border border-gray-200 dark:border-first/0 space-y-1 rounded-lg transition-all z-10 ${
          isOpen ? "mt-1 opacity-100 visible" : "mt-2 opacity-0 invisible"
        }`}
        onClick={onSelectOption}
      >
        {children}
      </div>
    </div>
  );
};

export default SelectInput;
