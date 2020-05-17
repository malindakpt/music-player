import React, { useContext, useCallback } from "react";
import { Track } from "../../../model/Track";
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

  const handleOnSelectSong = useCallback(
    (idx: number, track: Track) => {
      context.setCurrentSongIdx(idx);
      onTrackSelect(track);
    },
    [context, onTrackSelect]
  );

  return (
    <div className={classes.container}>
      {trackList.length > 0 ? (
        trackList.map((track, idx) => (
          <PlayListEntry
            key={track.id}
            track={track}
            onSelect={() => handleOnSelectSong(idx, track)}
            isPlaying={context.currentSongIdx === idx}
          />
        ))
      ) : (
        <div>
          Failed to fetch the songs from BE. Please refresh the app once you
          resolved the prooblems
        </div>
      )}
    </div>
  );
};
