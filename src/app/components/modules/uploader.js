import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Uploader({ label, cover, setFileData }) {
  return (
    <Button
      className={
        cover
          ? `w-full h-full !bg-cover !bg-center bg-['url(${cover})']`
          : "w-full h-full !bg-cover !bg-center bg-[url('/images/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg')]"
      }
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
    >
      <VisuallyHiddenInput
        type="file"
        onChange={(e) => setFileData(e.target.files[0])}
      />
    </Button>
  );
}
