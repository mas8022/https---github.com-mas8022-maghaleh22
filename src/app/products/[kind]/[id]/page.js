import React from "react";
import Hr from "../../../_components/modules/hr";
import AuthorBox from "../../../_components/template/authorBox";
import CommentsBox from "../../../_components/template/commentsBox";
import ContentArticle from "../../../_components/modules/contentArticle";
import Title from "../../../_components/template/title";
import dynamic from "next/dynamic";
import productModel from "@/models/product";
const Player = dynamic(() => import("../../..//_components/modules/player"), {
  ssr: false,
});

export default async function page({ params }) {
  const { _id, title, author, articleText, articleVideo, comments, tags } =
    await productModel.findOne({ _id: params.id });

  return (
    <>
      <div>
        <Hr />
        <Title title={title} />
        <Player url={articleVideo[0]} />
        <Hr />
        <ContentArticle content={articleText} />
        <Hr />

        <AuthorBox {...author} />
        <Hr />
        <CommentsBox comments={comments} tags={tags} />

        <Hr />
      </div>
      <Hr />
    </>
  );
}
