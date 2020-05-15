import React from "react";
import { Track } from "../../Model/Track";
import classes from "./PlayListEntry.module.scss";

export interface PlayListEntryProps {
  track: Track;
  onSelect: (track: Track) => void;
}

export const PlayListEntry: React.FC<PlayListEntryProps> = ({
  track,
  onSelect,
}) => {
  return (
    <div className={classes.container} onClick={() => onSelect(track)}>
      {track.name}
    </div>
  );
};
