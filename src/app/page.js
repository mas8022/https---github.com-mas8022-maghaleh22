import React from "react";
import MainCategoryFlex from "./components/template/mainCategoryFlex";
import Hr from "./components/modules/hr";
import Title from "./components/template/title";
import Sliders from "./components/modules/slider";

export default function Home() {
  return (
    <div className="w-full pt-20">
      <MainCategoryFlex />
      <Hr />
      <Title title={"دوره های رایگان"} />
      <Sliders />
      <Hr />
      <Title title={"جدید ترین اموزش ها"} />
      <Sliders />
      <Hr />
    </div>
  );
}
