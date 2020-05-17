import React, { useCallback } from "react";
import Slider from "@material-ui/core/Slider";
import LinearProgress from "@material-ui/core/LinearProgress";
import classes from "./ProgressController.module.scss";

export interface ProgressControllerProps {
  progress: number;
  duration: number;
  disabled: boolean;
  onProgressChange: (progress: number) => void;
}
export const ProgressController: React.FC<ProgressControllerProps> = ({
  progress,
  onProgressChange,
  duration,
  disabled,
}) => {
  const handleChange = useCallback(
    (event: any, newValue: number | number[]) => {
      onProgressChange(newValue as number);
    },
    [onProgressChange]
  );

  const progressPercentage = () => (progress * 100) / duration;
  return disabled ? (
    <div />
  ) : (
    <div className={classes.container}>
      <LinearProgress
        classes={{
          root: classes.root,
        }}
        variant="determinate"
        value={progressPercentage()}
      />
      <Slider
        value={progress}
        disabled={disabled}
        onChange={handleChange}
        min={0}
        max={duration}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
};
