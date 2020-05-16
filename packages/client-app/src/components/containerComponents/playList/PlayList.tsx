import React, { useContext } from "react";
import { Track } from "../../../model2/Track";
import { PlayListEntry } from "../../presentationComponents/playListEntry/PlayListEntry";
import classes from "./PlayList.module.scss";
import { AppContext } from "../../../App";
export interface PlayListProps {
  onTrackSelect: (track: Track) => void;
  trackList: Track[];
}
export const PlayList: React.FC<PlayListProps> = ({
  trackList,
  onTrackSelect,
}) => {
  const context = useContext(AppContext);

  const handleOnSelectSong = (idx: number, track: Track) => {
    context.setCurrentSongIdx(idx);
    onTrackSelect(track);
  };

  return (
    <div className={classes.container}>
      {trackList.map((track, idx) => (
        <PlayListEntry
          key={track.id}
          track={track}
          onSelect={() => handleOnSelectSong(idx, track)}
          isPlaying={context.currentSongIdx === idx}
        />
      ))}
    </div>
  );
};
