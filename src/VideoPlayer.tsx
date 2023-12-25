import { memo, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";

function VideoPlayer({
  playerConfig,
  handlePlayPause,
  handleStart,
  handleStop,
}: any) {
  const onClickPlayPause = () => {
    handlePlayPause();
  };

  const onClickStart = () => {
    handleStart();
  };

  const onClickStop = () => {
    handleStop();
  };

  return (
    <>
      <div className="video-player">
        <div className="video-player-content">
          <ReactPlayer
            className="react-player"
            url={playerConfig?.url}
            width={playerConfig?.width}
            height={playerConfig?.height}
            pip={playerConfig?.pip || false}
            playing={playerConfig?.playing}
            controls={playerConfig?.controls}
            light={playerConfig?.light}
            volume={playerConfig?.volume || 0.8}
            muted={playerConfig?.muted || false}
            playbackRate={playerConfig?.playbackRate || 1.0}
            loop={false}
          />
        </div>
        <div>
          <button className="btn btn-normal" onClick={onClickPlayPause}>
            Play/Pause
          </button>
          <button className="btn btn-normal" onClick={onClickStart}>
            Start
          </button>
          <button className="btn btn-normal" onClick={onClickStop}>
            Stop
          </button>
          <button className="btn btn-normal">Fullscreen</button>
        </div>
      </div>
    </>
  );
}

export default memo(VideoPlayer);
