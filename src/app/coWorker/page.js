import dynamic from "next/dynamic";
import React from "react";

const Editor = dynamic(() => import("@/src/app/components/modules/ck"), {
  ssr: false,
});

const CoWorker = () => {
  return (
    <div className="w-full py-20">
      <Editor initialData="<p>در این قسمت مقاله خود را بنویسید</p>" />
    </div>
  );
};

export default CoWorker;
