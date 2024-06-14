import React from "react";


const SelectItem = ({ value = "", children }) => {
  return (
    <div
      className="text-gray-500 flex items-center gap-x-2 p-3 rounded-md transition-all hover:bg-gray-50 cursor-pointer child:pointer-events-none !text-[1.2rem]"
      data-value={value}
    >
      {children}
    </div>
  );
};

export default SelectItem;
