import React from "react";
import classes from "./TrackInfo.module.scss";
import { TrackMetaData } from "../../Model/TrackMetaData";

export interface TrackInfoProps {
  trackMetaData?: TrackMetaData;
}
export const TrackInfo: React.FC<TrackInfoProps> = ({
  trackMetaData = { title: "Please select a track" },
}) => {
  return (
    <div className={classes.container}>
      <div>
        <div>{trackMetaData.title}</div>
        <div>{trackMetaData.artist}</div>
        <div>{trackMetaData.album}</div>
      </div>
      <div className={classes.thumbnail}>
        <img alt={trackMetaData.title} src={trackMetaData.thumbnailUrl} />
      </div>
    </div>
  );
};
