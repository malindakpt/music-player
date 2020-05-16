import React from "react";
import classes from "./ActionButton.module.scss";
import clsx from "clsx";

export interface ActionButtonProps {
  title: string;
  disabled: boolean;
  onClick: () => void;
}
export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  title,
  disabled,
}) => {
  const handleClick = () => {
    !disabled && onClick();
  };

  return (
    <div
      className={clsx(classes.container, { [classes.disabled]: disabled })}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
