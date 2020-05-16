import React, { useState } from "react";
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
  const [currentPlayId, setCurrentPlayId] = useState(-1);

  const handleOnSelectSong = (track: Track) => {
    setCurrentPlayId(track.id);
    onTrackSelect(track);
  };

  return (
    <div className={classes.container}>
      {trackList.map((track) => (
        <PlayListEntry
          key={track.id}
          track={track}
          onSelect={handleOnSelectSong}
          isPlaying={currentPlayId === track.id}
        />
      ))}
    </div>
  );
};
