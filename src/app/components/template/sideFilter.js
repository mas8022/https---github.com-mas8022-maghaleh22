"use client";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Image from "next/image";

export default function SideFilter({ active, setActive }) {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("value filter ==>", value);
  });

  return (
    <>
      <div
        className={
          active
            ? "w-[17rem] lg:w-96 gap-12 pl-12 h-screen flex flex-col pt-20 border-l fixed md:relative bg-white"
            : "w-[17rem] lg:w-96 gap-12 pl-12 h-screen hidden pt-20 border-l relative bg-white md:flex md:flex-col"
        }
      >
        <Image
          onClick={() => setActive((p) => !p)}
          src={"/images/multiplication-svgrepo-com.svg"}
          alt="exist"
          width={50}
          height={50}
          className="w-8 h-w-8 self-end md:hidden"
        ></Image>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          className="flex flex-col gap-3 w-[12rem] md:w-[20rem]"
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
