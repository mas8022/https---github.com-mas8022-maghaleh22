"use client";
// _components/custom-editor.js

import React, { useEffect, useMemo, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
    "language",
    "alignment",
    "direction",
  ],
  additionalLanguages: "all",
};

function CustomEditor(props) {
  const editorRef = useRef(null);
  const [editorLanguage, setEditorLanguage] = useState("fa");

  const language = {
    content: editorLanguage,
  };

  //   const language = useMemo(() => {
  //     return {
  //       content: editorLanguage,
  //     };
  //   }, [editorLanguage]);

  useEffect(() => {
    setEditorLanguage("en");
  }, []);

  console.log({ ...editorConfiguration, language });

  return (
    <div className="w-full min-h-[35rem] shadow-xl">
      <CKEditor
        ref={editorRef}
        editor={Editor}
        config={{ ...editorConfiguration, language }}
        data={props.initialData}
        className="custom-ckeditor"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
}

export default CustomEditor;
