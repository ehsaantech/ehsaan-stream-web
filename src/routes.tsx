import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Tracks from "./container/tracks-container";
import AudioPlayer from "react-h5-audio-player";
import "../src/utils/style.css";
import "react-h5-audio-player/lib/styles.css";
import { channelData } from "./services/data";
import { logChannelVisited, pauseTrack, playTrack } from "./services/analytics";

const Approutes = () => {
  const location = useLocation();
  const channelPath:any = location.pathname.split("/")[2];
  const [channelIndex, setChannelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(channelIndex);

  useEffect(() => {
    const index = channelData.findIndex((object) => {
      return object.channelRoute === channelPath;
    });
    if (index !== -1) {
      setChannelIndex(index);
    }
    setIsPlaying(false);
  }, [channelPath]);

  const channelTracks = channelData[channelIndex].mediaTracks;

  useEffect(() => {
    if (location.pathname.includes(channelPath)) {
        logChannelVisited(channelPath)
    }
  }, [channelPath, location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      setTrackIndex(-1);
    }
  }, []);

  const audiofunction = (mediaName: any) => {
    const index = channelTracks.findIndex((object) => {
      return object.name === mediaName;
    });
    setTrackIndex(index);
    setIsPlaying(true);
  };
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack: any) =>
      currentTrack === 0 ? channelTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack: any) =>
      currentTrack < channelTracks.length - 1 ? currentTrack + 1 : 0
    );
  };
  const Tracksrc = channelTracks[trackIndex]?.src;
  const Trackname = channelTracks[trackIndex]?.name;
  const scholarName = channelData[channelIndex]?.scholarName;
  const scholarDesc = channelData[channelIndex]?.scholarDescription;
  const channelImg = channelData[channelIndex]?.img;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/channels/:channelName"
          element={
            <Tracks
              audioFunction={audiofunction}
              channelTracks={channelTracks}
              scholarName={scholarName}
              scholarDesc={scholarDesc}
              channelImg={channelImg}
            />
          }
        />
      </Routes>
      {trackIndex >= 0 ? (
        <AudioPlayer
          className="audioplayer"
          style={{
            borderRadius: "1rem",
            width: "60%",
            position: "fixed",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 0)",
            boxShadow: "0 0 3px 0 rgb(0 0 0 / 20%)",
            padding: "10px 15px",
            background: "white",
            zIndex: "100",
          }}
          autoPlay={isPlaying}
          autoPlayAfterSrcChange={isPlaying}
          src={Tracksrc}
          onPlay={() => playTrack(channelPath)}
          onPause={() => pauseTrack(channelPath)}
          showSkipControls={true}
          showJumpControls={false}
          header={`Now playing: ${Trackname}`}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          footer
        />
      ) : null}
    </>
  );
};

export default Approutes;
