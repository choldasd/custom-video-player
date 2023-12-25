import { useState } from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import DemoVideo from "./assets/beauty-of-nature.mp4";

function App() {
  const [videoPlayerConfig, setVideoPlayerConfig] = useState({
    url: DemoVideo || null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: true,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  });

  const handlePlayPause = () => {
    setVideoPlayerConfig({
      ...videoPlayerConfig,
      playing: !videoPlayerConfig.playing,
    });
  };

  const handleStart = () => {
    setVideoPlayerConfig({
      ...videoPlayerConfig,
      playing: true,
      url: DemoVideo,
    });
  };

  const handleStop = () => {
    setVideoPlayerConfig({
      ...videoPlayerConfig,
      playing: false,
      url: null,
    });
  };

  return (
    <>
      <div className="card">
        <div className="video-player-wrapper">
          <VideoPlayer
            playerConfig={videoPlayerConfig}
            handlePlayPause={handlePlayPause}
            handleStart={handleStart}
            handleStop={handleStop}
          ></VideoPlayer>
        </div>
        <div className="video-player-controls"></div>
      </div>
    </>
  );
}

export default App;
