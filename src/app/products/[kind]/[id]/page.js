import React from "react";
import Player from "@/src/app/components/modules/player";
import Hr from "@/src/app/components/modules/hr";
import AuthorBox from "@/src/app/components/template/authorBox";
import CommentsBox from "@/src/app/components/template/commentsBox";

export default function page({ id }) {
  console.log("product id ==>", id);
  return (
    <div>
      <Hr />
      <Player
        url={
          "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns="
        }
      />
      <Hr />
      {/* ck editor  products */}
      <Hr />

      <AuthorBox />
      <Hr />
      <CommentsBox />

      <Hr />
    </div>
  );
}
