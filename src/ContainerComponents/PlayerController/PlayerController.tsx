import React, { useState, useEffect } from "react";
import { ActionButton } from "../../PresentationComponents/ActionButton/ActionButton";
import { ProgressController } from "../ProgressController/ProgressController";
import classes from "./PlayerController.module.scss";

enum PlayPauseButtonLabel {
  PLAY = "Play",
  PAUSE = "Pause",
}
export interface PlayerControllerProps {
  url?: string;
  onNextSelect: () => void;
  onPrevSelect: () => void;
}
export const PlayerController: React.FC<PlayerControllerProps> = ({
  url,
  onNextSelect,
  onPrevSelect,
}) => {
  // TODO Remove any type below
  let audio: any = React.createRef();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [togglePlayLabel, setTogglePlayLabel] = useState(
    PlayPauseButtonLabel.PLAY
  );

  useEffect(() => {
    setDuration(audio.current?.duration);
    audio.current && audio.current.load();
    // eslint-disable-next-line
  }, [url]);

  const handleStop = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
  };

  const handleProgressChange = (progress: number) => {
    setProgress(progress);
    if (audio.current) {
      audio.current.currentTime = progress;
    }
  };

  const handleTimeUpdate = () => {
    if (audio.current) {
      setProgress(audio.current.currentTime);
    }
  };

  const handleTogglePlay = () => {
    if (audio.current) {
      if (audio.current.paused) {
        audio.current.play();
      } else {
        audio.current.pause();
      }
    }
  };

  return (
    <div className={classes.container}>
      {url && (
        <audio
          autoPlay
          ref={audio}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => {
            setTogglePlayLabel(PlayPauseButtonLabel.PAUSE);
          }}
          onPause={() => {
            setTogglePlayLabel(PlayPauseButtonLabel.PLAY);
          }}
        >
          <source src={url} type="audio/mpeg" />
        </audio>
      )}
      <ProgressController
        duration={duration}
        progress={progress}
        onProgressChange={handleProgressChange}
      />
      <div className={classes.actionButtons}>
        <ActionButton title="Stop" onClick={handleStop} />
        <ActionButton title="Prev" onClick={onPrevSelect} />
        <ActionButton title={togglePlayLabel} onClick={handleTogglePlay} />
        <ActionButton title="Next" onClick={onNextSelect} />
      </div>
    </div>
  );
};
