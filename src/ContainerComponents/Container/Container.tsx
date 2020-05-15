import React, { useCallback } from "react";
import classes from "./Container.module.scss";
import { PlayList } from "../PlayList/PlayList";
import { PlayerController } from "../PlayerController/PlayerController";
import { PlayArea } from "../PlayArea/PlayArea";
import { Track } from "../../Model/Track";

export const Container: React.FC = () => {
  const trackList = [
    {
      name: "Inga sunga nalwana",
      url:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-8e865.appspot.com/o/Inga_Sunga_Nalawana_Buddhika_Ushan_Sarigama_lk%20-%20Copy.mp3?alt=media&token=04b9d6ab-ca4f-48dc-9b16-c2f63f008e29",
    },
  ];

  const handleSelectTrack = useCallback((track: Track) => {
    console.log("selected:", track);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <PlayArea />
        <PlayList trackList={trackList} onTrackSelect={handleSelectTrack} />
        <PlayerController />
      </div>
    </div>
  );
};
