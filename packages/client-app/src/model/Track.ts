import { TrackMetaData } from "./TrackMetaData";

export interface Track {
  id: number;
  url: string;
  metaData: TrackMetaData;
}
