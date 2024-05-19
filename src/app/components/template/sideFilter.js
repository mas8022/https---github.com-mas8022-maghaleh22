"use client";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function SideFilter() {
  const [value, setValue] = useState("female");
  const [active, setActive] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("value filter ==>", value);
  });

  return (
    <>
      <div
        onClick={() => setActive((p) => (p = !p))}
        className={
          active
            ? "md:hidden shadOne fixed top-[8rem] right-[21rem] w-[7rem] p-4 h-6 flex items-center justify-end bg-white"
            : "md:hidden shadOne fixed top-[8rem] right-[-1rem] w-[7rem] p-4 h-6 flex items-center justify-end bg-white"
        }
      >
        مرتب سازی
      </div>

      <div
        className={
          active
            ? "w-96 min-h-[62rem] flex pt-20 border-l relative  bg-white"
            : "w-96 min-h-[62rem] hidden pt-20 border-l relative bg-white md:flex"
        }
      >
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          className="flex flex-col gap-3"
        >
          <FormControlLabel
            className="mr-0"
            value="bestselling"
            control={<Radio />}
            label={
              <span className="text-[1.5rem] font-bold">پر فروش ترین</span>
            }
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
    </>
  );
}
