import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { Songs } from "../context/context";
import "react-h5-audio-player/lib/styles.css";

const Playing = () => {
  const { song, handleSong } = useContext(Songs);
  const handleClickNext = () => {
    handleSong(song.id + 1);
  };
  const handleClickPre = () => {
    handleSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
};

export default Playing;
