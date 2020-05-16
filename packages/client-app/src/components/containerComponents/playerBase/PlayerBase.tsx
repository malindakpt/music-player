import React, { useState, useEffect } from "react";
import classes from "./PlayerBase.module.scss";
import { PlayList } from "../playList/PlayList";
import { PlayerController } from "../playerController/PlayerController";
import { Track } from "../../../model/Track";
import { TrackInfo } from "../../presentationComponents/trackInfo/TrackInfo";
import axios from "axios";

export const Container: React.FC = () => {
  const [trackList, setTrackList] = useState<Track[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/playlist.json")
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
        <div className={classes.songPlay}>
          <TrackInfo trackMetaData={selectedTrack?.metaData} />
          <PlayerController
            url={selectedTrack?.url}
            onNextSelect={handleNext}
            onPrevSelect={handlePrev}
          />
        </div>

        <PlayList trackList={trackList} onTrackSelect={setSelectedTrack} />
      </div>
    </div>
  );
};
