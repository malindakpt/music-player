import React from "react";
import { Track } from "../../Model/Track";

export interface PlayListEntryProps {
  track: Track;
}
export const PlayListEntry: React.FC<PlayListEntryProps> = ({ track }) => {
  return <div>{track.name}</div>;
};
