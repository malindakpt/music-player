import React from "react";

export interface ActionButtonProps {
  title: string;
  onClick: () => void;
}
export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  title,
}) => {
  return <div onClick={onClick}>{title}</div>;
};
