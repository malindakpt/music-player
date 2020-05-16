import React from "react";
import { Track } from "../../../model/Track";
import classes from "./PlayListEntry.module.scss";
import clsx from "clsx";

export interface PlayListEntryProps {
  track: Track;
  isPlaying: boolean;
  onSelect: (track: Track) => void;
}

export const PlayListEntry: React.FC<PlayListEntryProps> = ({
  track,
  isPlaying,
  onSelect,
}) => {
  return (
    <div
      className={clsx(classes.container, { [classes.isPlaying]: isPlaying })}
      onClick={() => onSelect(track)}
    >
      {track.metaData.title}
    </div>
  );
};
