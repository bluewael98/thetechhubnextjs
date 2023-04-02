import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="z-[40] fixed bottom-0 right-0 mr-10 mb-10 bg-neoblue py-2 px-7 rounded-full  border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black shadow-lg">
      <audio id="audio" src="/audio.mp3" autoPlay></audio>
      <MusicNoteIcon fontSize="large" />{" "}
      <button onClick={togglePlay} className=" ">
        {isPlaying ? (
          <PauseCircleIcon fontSize="large" />
        ) : (
          <PlayCircleIcon fontSize="large" />
        )}
      </button>
    </div>
  );
};

export default Audio;
