import React, { useState, useEffect, useContext, useCallback } from "react";
import classes from "./PlayerBase.module.scss";
import { PlayList } from "../playList/PlayList";
import { PlayerController } from "../playerController/PlayerController";
import { Track } from "../../../model/Track";
import { TrackInfo } from "../../presentationComponents/trackInfo/TrackInfo";
import axios from "axios";
import { AppContext } from "../../../App";

export const PlayerBase: React.FC = () => {
  const [trackList, setTrackList] = useState<Track[]>([]);
  const context = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SONG_SERVER_ADDR}/playlist.json`)
      .then((result) => setTrackList(result.data))
      .catch((e) => {
        alert("Failed to connect to songs server");
      });
  }, []);

  const [selectedTrack, setSelectedTrack] = useState<Track>();

  const handleSelectNext = useCallback(() => {
    let idx = trackList.findIndex((track) => track.url === selectedTrack?.url);
    if (trackList.length > ++idx) {
      setSelectedTrack(trackList[idx]);
      context.setCurrentSongIdx(idx);
    } else {
      setSelectedTrack(trackList[0]);
      context.setCurrentSongIdx(0);
    }
  }, [selectedTrack, trackList, context]);

  const handleSelectPrev = useCallback(() => {
    const trackSize = trackList.length;
    let idx = trackList.findIndex((track) => track.url === selectedTrack?.url);
    if (0 <= --idx) {
      setSelectedTrack(trackList[idx]);
      context.setCurrentSongIdx(idx);
    } else {
      setSelectedTrack(trackList[trackSize - 1]);
      context.setCurrentSongIdx(trackSize - 1);
    }
  }, [context, selectedTrack, trackList]);

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.songPlay}>
          <TrackInfo trackMetaData={selectedTrack?.metaData} />
          <PlayerController
            url={selectedTrack?.url}
            playListLength={trackList.length}
            onNextSelect={handleSelectNext}
            onPrevSelect={handleSelectPrev}
          />
        </div>

        <PlayList trackList={trackList} onTrackSelect={setSelectedTrack} />
      </div>
    </div>
  );
};
