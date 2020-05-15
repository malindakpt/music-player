import React, { useState } from "react";
import classes from "./Container.module.scss";
import { PlayList } from "../PlayList/PlayList";
import { PlayerController } from "../PlayerController/PlayerController";
import { Track } from "../../Model/Track";
import { TrackInfo } from "../../PresentationComponents/TrackInfo/TrackInfo";

export const Container: React.FC = () => {
  const trackList: Track[] = [
    {
      name: "Inga sunga nalwana",
      url:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-8e865.appspot.com/o/Inga_Sunga_Nalawana_Buddhika_Ushan_Sarigama_lk%20-%20Copy.mp3?alt=media&token=04b9d6ab-ca4f-48dc-9b16-c2f63f008e29",
      metaData: {
        album: "album name",
        thumbnailUrl:
          "https://a10.gaanacdn.com/images/song/5/24091705/crop_480x480_1537454512.jpg",
        artist: "artist name",
        title: "title",
      },
    },
  ];

  const [selectedTrack, setSelectedTrack] = useState<Track>();

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <TrackInfo trackMetaData={selectedTrack?.metaData} />
        <PlayList trackList={trackList} onTrackSelect={setSelectedTrack} />
        <PlayerController url={selectedTrack?.url} />
      </div>
    </div>
  );
};
