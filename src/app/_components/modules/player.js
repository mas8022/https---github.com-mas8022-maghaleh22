"use client";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function Player({ url, auto }) {
  const plyrProps = {
    source: {
      type: "video",
      title: "Example title",
      sources: [
        {
          src: `${url}`,
          type: "video/mp4",
          size: 720,
        },
      ],
    },
    options: {
      autoplay: auto,
    },
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <Plyr {...plyrProps} />
    </div>
  );
}
