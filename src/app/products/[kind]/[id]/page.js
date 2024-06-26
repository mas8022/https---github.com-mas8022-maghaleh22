import React from "react";
import Player from "../../..//_components/modules/player";
import Hr from "../../../_components/modules/hr";
import AuthorBox from "../../../_components/template/authorBox";
import CommentsBox from "../../../_components/template/commentsBox";

export default function page({ id }) {
  return (
    <>
      <div>
        <Hr />
        <Player
          url={
            "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns="
          }
        />
        <Hr />
        {/* ck editor  result */}
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
