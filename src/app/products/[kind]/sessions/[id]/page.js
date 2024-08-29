import React from "react";
import Hr from "../../../../_components/modules/hr";
import AuthorBox from "../../../../_components/template/authorBox";
import CommentsBox from "../../../../_components/template/commentsBox";
import ContentArticle from "../../../../_components/modules/contentArticle";
import Title from "../../../../_components/template/title";
import dynamic from "next/dynamic";
import productModel from "@/models/product";
const Player = dynamic(() => import("../../../../_components/modules/player"), {
  ssr: false,
});

export default async function page( {params} ) {
  
  const { title, author, articleText, articleVideo, comments, tags } =
    await productModel.findOne({ _id: params.id }).lean();

  return (
    <>
      <div>
        <Hr />
        <Title title={title} />
        <Player videoSRCes={JSON.parse(JSON.stringify(articleVideo))} />
        <Hr />
        <ContentArticle content={JSON.parse(JSON.stringify(articleText))} />
        <Hr />

        {author?.profile && author?.bio && <AuthorBox {...author} />}
        <Hr />
        <CommentsBox comments={JSON.parse(JSON.stringify(comments))} tags={JSON.parse(JSON.stringify(tags))} />

        <Hr />
      </div>
      <Hr />
    </>
  );
}
