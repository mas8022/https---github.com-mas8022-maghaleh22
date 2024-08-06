import React from "react";
import MainCategoryFlex from "./_components/template/mainCategoryFlex";
import Hr from "./_components/modules/hr";
import Title from "./_components/template/title";
import Sliders from "./_components/modules/slider";
import Ad from "./_components/template/ad";
import MainSearch from "./_components/template/mainSearch";
import CommentsSlider from "./_components/template/commentsSlider";
import Ue from "./_components/modules/Ue";

export default function Home() {
  return (
    <>
      <div className="w-full pt-14">
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

        <Ue classes={"w-full h-60 bg-first/5 p-10 flex item-center"}>
          <span className="text-first">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            dignissimos pariatur nam sapiente et at quas illum perspiciatis
            commodi. Asperiores!
          </span>
        </Ue>
      </div>
      <Hr />
    </>
  );
}
