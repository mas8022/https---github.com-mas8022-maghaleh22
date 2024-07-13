"use client";
import React from "react";

const SelectBox = ({ formikInstance }) => {
  return (
    <>
      <select
        id="group"
        name="group"
        onChange={formikInstance.handleChange}
        onBlur={formikInstance.handleBlur}
        value={formikInstance.values.group? formikInstance.values.group : ""}
        className="w-[30rem] h-[4.2rem] text-black/50 dark:text-first/60 dark:bg-[#0d141f] text-[1.3rem] rounded-md border-1 outline-none border-gray-600/30 px-6 focus:outline-none"
      >
        <option value="" label="دسته بندی" hidden/>
        <option
          value="نرم افزار و فناوری اطلاعات"
          label="نرم افزار و فناوری اطلاعات"
        />
        <option value="اقتصاد و حسابداری" label="اقتصاد و حسابداری" />
        <option value="گسب و کار" label="گسب و کار" />
        <option value="کودک و نوجوان" label="کودک و نوجوان" />
        <option value="اموزش زبان" label="اموزش زبان" />
        <option value="هنر و طراحی" label="هنر و طراحی" />
      </select>
      {formikInstance.touched.group &&
        formikInstance.errors.group &&
        formikInstance.errors.group}
    </>
  );
};

export default SelectBox;

// import useToggle from "../../../../utils/toggle";
// import React, { useState } from "react";
// import { HiOutlineChevronDown } from "react-icons/hi2";

// const SelectInput = ({
//   defaultValue = "",
//   id = "",
//   label = "",
//   children,
//   onChange = () => {},
// }) => {
//   const [value, setValue] = useState(defaultValue);
//   const [isOpen, toggleOpen] = useToggle("selectBox");

//   const onSelectOption = (event) => {
//     const value = event.target.dataset.value;
//     const name = event.target.innerHTML;

//     if (value) {
//       setValue(name || value);
//       onChange(name || value);
//     } else {
//       event.stopPropagation();
//     }
//   };

//   return (
//     <div className="relative !h-16 w-[27rem] sm:w-[24rem] xxl:w-[30rem] dark:bg-[#0d141f]">
//       <input
//         onClick={(event) => toggleOpen(event)}
//         className={`select-appearance-none w-full h-full flex items-center justify-between peer p-3 text-sm text-gray-700 outline-none border border-gray-200 dark:border-red-50/0 rounded-lg hover:border-gray-300 focus:border-second/50 dark:focus:border-first/0 cursor-pointer caret-transparent dark:bg-[#0d141f]`}
//         value={""}
//       />
//       <label
//         htmlFor={id}
//         className={`absolute right-3 h-max top-0 m-auto text-gray-400 peer-focus:text-second dark:peer-focus:text-first pointer-events-none transition-all ${
//           isOpen || !!value
//             ? "px-1 bg-white dark:bg-[#1e293b] bottom-full text-[1.2rem]"
//             : "text-[1.3rem] bottom-0 cursor-text peer-focus:px-1 peer-focus:bg-white dark:peer-focus:bg-[#1e293b] peer-focus:bottom-full peer-focus:text-xs"
//         }`}
//       >
//         {label}
//       </label>
//       <div className="absolute inset-0 pointer-events-none p-3 flex items-center justify-between text-gray-500">
//         <span
//           className="text-[1.3rem] flex items-center gap-x-2"
//           dangerouslySetInnerHTML={{ __html: value?.name || "" }}
//         ></span>
//         <HiOutlineChevronDown
//           className={`${isOpen ? "rotate-180" : ""} size-6`}
//         />
//       </div>
//       <div
//         className={`absolute left-0 right-0 top-full p-2 bg-white dark:bg-[#121c2c] border border-gray-200 dark:border-first/0 space-y-1 rounded-lg transition-all z-10 ${
//           isOpen ? "mt-1 opacity-100 visible" : "mt-2 opacity-0 invisible"
//         }`}
//         onClick={onSelectOption}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default SelectInput;
