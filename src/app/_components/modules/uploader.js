import React from "react";
import { MoonLoader } from "react-spinners";

export default function Uploader({
  name = "",
  label = "",
  customClass = "",
  loader = false,
  formHandler,
}) {
  return (
    <label className={customClass}>
      {loader ? <MoonLoader size={20} color="#fff" /> : <span>{label}</span>}

      <input
        type="file"
        name={name}
        onChange={(e) =>
          formHandler.setFieldValue(name, e.currentTarget.files[0])
        }
        id="fileData"
        hidden
      />
    </label>
  );
}
