import React from "react";
import { useState } from "react";

export default function Uploader({
  name = "",
  cover,
  fileData = "",
  setFileData,
}) {
  const [fileData, setFileData] = useState(fileData);
  return (
    <label
      className={`w-full h-full !bg-cover !bg-center ${
        cover
          ? `bg-['url(${cover})']`
          : " bg-[url('/images/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg')]"
      }`}
    >
      <input
        type="file"
        name={name}
        onChange={(e) => setFileData(e.currentTarget.files[0])}
        id="fileData"
        hidden
      />
    </label>
  );
}
