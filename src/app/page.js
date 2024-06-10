import React from "react";
import MainCategoryFlex from "./components/template/mainCategoryFlex";
import Hr from "./components/modules/hr";
import Title from "./components/template/title";
import Sliders from "./components/modules/slider";
import Ad from "./components/template/ad";
import MainSearch from "./components/template/mainSearch";
import CommentsSlider from "./components/template/commentsSlider";

export default function Home() {
  return (
    <div className="w-full pt-20">
      <MainSearch />
      <Hr />
      <MainCategoryFlex />
      <Hr />
      <Title title={"دوره های رایگان"} />
      <Sliders />
      <Hr />
      <Title title={"جدید ترین اموزش ها"} />
      <Sliders />
      <Hr />
      <Title title={" محبوب ترین اموزش ها"} />
      <Sliders />
      <Hr />
      <Ad />
      <Hr />
      <Title title={"جدید ترین نظرات"} />
      <CommentsSlider />
      <Hr />
    </div>
  );
}
