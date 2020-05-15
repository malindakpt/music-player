import React from "react";
import { Track } from "../../Model/Track";
import { PlayListEntry } from "../../PresentationComponents/PlayListEntry/PlayListEntry";

export interface PlayListProps {
  onTrackSelect: (track: Track) => void;
  trackList: Track[];
}
export const PlayList: React.FC<PlayListProps> = ({ trackList }) => {
  return (
    <div>
      {trackList.map((track) => (
        <PlayListEntry key={track.url} track={track} />
      ))}
    </div>
  );
};
