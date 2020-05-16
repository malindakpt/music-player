import React, { useState, useEffect } from "react";
import classes from "./Container.module.scss";
import { PlayList } from "../PlayList/PlayList";
import { PlayerController } from "../PlayerController/PlayerController";
import { Track } from "../../Model/Track";
import { TrackInfo } from "../../PresentationComponents/TrackInfo/TrackInfo";
import axios from "axios";

export const Container: React.FC = () => {
  const [trackList, setTrackList] = useState<Track[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/playlist.json")
      .then((result) => setTrackList(result.data));
  }, []);

  const [selectedTrack, setSelectedTrack] = useState<Track>();

  const handleNext = () => {
    let idx = trackList.findIndex((track) => track.url === selectedTrack?.url);
    if (trackList.length > ++idx) {
      setSelectedTrack(trackList[idx]);
    }
  };

  const handlePrev = () => {
    let idx = trackList.findIndex((track) => track.url === selectedTrack?.url);
    if (0 <= --idx) {
      setSelectedTrack(trackList[idx]);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <TrackInfo trackMetaData={selectedTrack?.metaData} />
        <PlayList trackList={trackList} onTrackSelect={setSelectedTrack} />
        <PlayerController
          url={selectedTrack?.url}
          onNextSelect={handleNext}
          onPrevSelect={handlePrev}
        />
      </div>
    </div>
  );
};
