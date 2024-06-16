"use client";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function SideFilter() {
  const [value, setValue] = useState("all");
  const [sideFlag, setSideFlag] = useLocalStorage("sidebarFilter", false);

  useEffect(() => {
    const closeSideBarHandler = (e) => {
      if (e.target.contains(document.querySelector(".bgActive"))) {
        setSideFlag(false);
      }
    };
    window.addEventListener("click", (e) => {
      closeSideBarHandler(e);
    });
    return () => window.removeEventListener("click", closeSideBarHandler);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("value filter ==>", value);
  });

  return (
    <>
      <div
        onClick={() => setSideFlag(true)}
        className="text-[1.3rem] text-second md:hidden w-24 h-12 bg-second/10 flex items-center justify-center rounded-md"
      >
        بر اساس
      </div>

      <div
        className={`w-[21rem] h-screen bg-first dark:bg-[#1e293b] shadow-2xl fixed top-0 transition-all ease-in-out duration-[0.4s] z-[1000] ${
          sideFlag ? "right-0" : "-right-[30rem]"
        }`}
      >
        <div className="w-[17rem] lg:w-96 gap-12 pl-12 h-screen flex flex-col pt-20 fixed md:relative bg-white dark:bg-[#1e293b]">
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
              label={
                <span className="text-[1.5rem] font-bold">همه محصولات</span>
              }
            />
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
              label={
                <span className="text-[1.5rem] font-bold">ارزان ترین</span>
              }
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
              label={
                <span className="text-[1.5rem] font-bold">محبوب ترین</span>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <div
        className={
          sideFlag
            ? "bgActive w-full h-full z-0 bg-black/20 fixed top-0 left-0"
            : "hidden"
        }
      ></div>
    </>
  );
}
