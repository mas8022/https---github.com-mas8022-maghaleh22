"use client";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { memo } from "react";

const Player = memo(({ url, auto }) => {
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
});
export default Player;
