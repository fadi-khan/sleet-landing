"use client";


import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="video-btn"
        onClick={() => setIsOpen(true)}
      >
        <i className="fi flaticon-play-button-arrowhead"></i>
      </button>

      <VideoModal
        isOpen={isOpen}
        videoId="Pjjleyj6umQ"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default VideoSection;