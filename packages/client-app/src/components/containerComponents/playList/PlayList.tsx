import React from "react";
import { Track } from "../../../model/Track";
import { PlayListEntry } from "../../presentationComponents/playListEntry/PlayListEntry";
import classes from "./PlayList.module.scss";
export interface PlayListProps {
  onTrackSelect: (track: Track) => void;
  trackList: Track[];
}
export const PlayList: React.FC<PlayListProps> = ({
  trackList,
  onTrackSelect,
}) => {
  return (
    <div className={classes.container}>
      {trackList.map((track) => (
        <PlayListEntry key={track.id} track={track} onSelect={onTrackSelect} />
      ))}
    </div>
  );
};
