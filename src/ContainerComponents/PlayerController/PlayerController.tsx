import React, { useState } from "react";
import { ActionButton } from "../../PresentationComponents/ActionButton/ActionButton";
import { ProgressController } from "../ProgressController/ProgressController";

export interface PlayerControllerProps {
  url?: string;
}
export const PlayerController: React.FC<PlayerControllerProps> = ({ url }) => {
  // TODO Remove any type below
  let audio: any = React.createRef();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    setDuration(audio.current?.duration);
    audio.current.play();
  };

  const handlePause = () => {
    audio.current.pause();
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

  return (
    <div>
      {url && (
        <audio ref={audio} onTimeUpdate={handleTimeUpdate}>
          <source src={url} type="audio/mpeg" />
        </audio>
      )}
      <ProgressController
        duration={duration}
        progress={progress}
        onProgressChange={handleProgressChange}
      />
      <ActionButton title="Play" onClick={handlePlay} />
      <ActionButton title="Pause" onClick={handlePause} />
    </div>
  );
};
