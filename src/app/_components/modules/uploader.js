"use client";
import Image from "next/image";
import React, { memo } from "react";
import { MoonLoader } from "react-spinners";
const Uploader = memo(
  ({
    profile = "",
    name = "",
    label = "",
    customclassName = "",
    loader = false,
    formHandler,
  }) => {
    return (
      <label className={`relative ${customclassName}`}>
        {profile && (
          <Image
            src={profile}
            width={300}
            height={300}
            alt="not found"
            className="absolute size-full object-cover !border-0 !outline-none !ring-0"
          />
        )}

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
);
export default Uploader;
