import { TrackMetaData } from "./TrackMetaData";

export interface Track {
  name: string;
  url: string;
  metaData: TrackMetaData;
}
