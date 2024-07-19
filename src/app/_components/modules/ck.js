"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Editor({ articleText, setArticleText }) {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    setEditorLoaded(true);

    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          configs={{
            toolbar: [
              "ckbox",
              "imageUpload",
              "|",
              "heading",
              "|",
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "|",
              "blockQuote",
              "indent",
              "link",
              "|",
              "bulletedList",
              "numberedList",
            ],
          }}
          data={articleText}
          onChange={(event, editor) => {
            const data = editor.getData();
            setArticleText(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
