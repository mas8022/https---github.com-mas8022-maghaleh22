"use client";
import React from "react";
import Player from "../../..//_components/modules/player";
import Hr from "../../../_components/modules/hr";
import AuthorBox from "../../../_components/template/authorBox";
import CommentsBox from "../../../_components/template/commentsBox";
import ContentArticle from "../../../_components/modules/contentArticle";
import Title from "../../../_components/template/title";
export default function page() {
  return (
    <>
      <div>
        <Hr />
        <Title title={"سر تیتر مقاله"} />
        <Player
          url={
            "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns="
          }
        />
        <Hr />
        <ContentArticle />
        <Hr />

        <AuthorBox />
        <Hr />
        <CommentsBox />

        <Hr />
      </div>
      <Hr />
    </>
  );
}
