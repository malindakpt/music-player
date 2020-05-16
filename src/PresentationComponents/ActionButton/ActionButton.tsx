import React from "react";
import classes from "./ActionButton.module.scss";

export interface ActionButtonProps {
  title: string;
  onClick: () => void;
}
export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  title,
}) => {
  return (
    <div className={classes.container} onClick={onClick}>
      {title}
    </div>
  );
};
