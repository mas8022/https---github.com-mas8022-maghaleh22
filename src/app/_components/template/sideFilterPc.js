import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";

const SideFilterPc = () => {
  const [value, setValue] = useState("all");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="md:flex hidden w-[17rem] lg:w-96 gap-12 pl-12 h-screen flex-col pt-20 border-l dark:border-first/20 fixed md:relative bg-white dark:bg-[#1e293b]">
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        className="flex flex-col gap-3 w-[12rem] md:w-[20rem] !mr-0"
      >
        <FormControlLabel
          className="mr-0"
          value="all"
          control={<Radio />}
          label={<span className="text-[1.5rem] font-bold">همه محصولات</span>}
        />
        <FormControlLabel
          className="mr-0"
          value="bestselling"
          control={<Radio />}
          label={<span className="text-[1.5rem] font-bold">پر فروش ترین</span>}
        />
        <FormControlLabel
          className="mr-0"
          value="cheapest"
          control={<Radio />}
          label={<span className="text-[1.5rem] font-bold">ارزان ترین</span>}
        />
        <FormControlLabel
          value="mostVisited"
          className="mr-0"
          control={<Radio />}
          label={
            <span className="text-[1.5rem] font-bold">پر بازدید ترین</span>
          }
        />
        <FormControlLabel
          className="mr-0"
          value="expensive"
          control={<Radio />}
          label={<span className="text-[1.5rem] font-bold">گران ترین</span>}
        />
        <FormControlLabel
          className="mr-0"
          value="popular"
          control={<Radio />}
          label={<span className="text-[1.5rem] font-bold">محبوب ترین</span>}
        />
      </RadioGroup>
    </div>
  );
};

export default SideFilterPc;
