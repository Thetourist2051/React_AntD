import React, { FC, MouseEvent } from "react";

interface buttonProps {
  type: "button" | "submit" | "reset";
  text: string;
  className: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<buttonProps> = ({ type, text, className, onClick }) => {
  return <button type={type} className={className} onClick ={onClick}>{text}</button>;
};

export default Button;
