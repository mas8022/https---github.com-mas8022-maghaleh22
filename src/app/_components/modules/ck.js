// components/custom-editor.js
"use client"; // only in App Router

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Undo,
  Redo,
  Heading,
  Fontfamily,
  Fontsize,
  FontColor,
  FontBackgroundColor,
  Bold,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Code,
  Link,
  UploadImage,
  BlockQuote,
  CodeBlock,
  BulletedList,
  NumberedList,
  TodoList,
  Outdent,
  Indent,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
function CustomEditor() {
  return (
    <div className="h-60 shadow-md">
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "heading",
              "|",
              "fontfamily",
              "fontsize",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "bold",
              "italic",
              "strikethrough",
              "subscript",
              "superscript",
              "code",
              "-", // break point
              "|",
              "alignment",
              "link",
              "uploadImage",
              "blockQuote",
              "codeBlock",
              "|",
              "bulletedList",
              "numberedList",
              "todoList",
              "outdent",
              "indent",
            ],
          },
          plugins: [
            Undo,
            Redo,
            Heading,
            Fontfamily,
            Fontsize,
            FontColor,
            FontBackgroundColor,
            Bold,
            Italic,
            Strikethrough,
            Subscript,
            Superscript,
            Code,
            Link,
            UploadImage,
            BlockQuote,
            CodeBlock,
            BulletedList,
            NumberedList,
            TodoList,
            Outdent,
            Indent,
          ],
          initialData: "<p>Hello from CKEditor 5 in React!</p>",
        }}
      />
    </div>
  );
}

export default CustomEditor;
