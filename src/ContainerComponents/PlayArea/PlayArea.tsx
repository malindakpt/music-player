import React from "react";
import { TrackInfo } from "../../PresentationComponents/TrackInfo/TrackInfo";
import { ProgressController } from "../ProgressController/ProgressController";
import classes from "./PlayArea.module.scss";

export const PlayArea: React.FC = () => {
  return (
    <div className={classes.container}>
      <TrackInfo />
      <ProgressController />
    </div>
  );
};
