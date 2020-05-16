import React from "react";
import classes from "./TrackInfo.module.scss";
import { TrackMetaData } from "../../Model/TrackMetaData";

export interface TrackInfoProps {
  trackMetaData?: TrackMetaData;
}
export const TrackInfo: React.FC<TrackInfoProps> = ({
  trackMetaData = {
    title: "Select a track",
    artist: "Music Player",
    album: "version 1.0.0",
  },
}) => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.title}>{trackMetaData.title}</div>
        <div>{trackMetaData.artist}</div>
        <div>{trackMetaData.album}</div>
      </div>
      <div className={classes.thumbnail}>
        {trackMetaData.thumbnailUrl && (
          <img alt={trackMetaData.title} src={trackMetaData.thumbnailUrl} />
        )}
      </div>
    </div>
  );
};
