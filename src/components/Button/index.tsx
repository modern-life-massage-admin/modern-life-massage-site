import * as React from "react";

type ButtonProps = {
  submit?: boolean;
  variant?: "default" | "primary" | "outline" | "no-style";
  size?: "default" | "large";
  children: React.ReactNode;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};
const Button = ({
  submit = false,
  variant = "default",
  children,
  onClick,
  size = "default",
}: ButtonProps) => {
  let className = "button";
  if (variant !== "default" && size !== "default") {
    className = `button--${variant}--large`;
  } else if (variant !== "default") {
    className = `button--${variant}`;
  } else if (size !== "default") {
    className = "button--large";
  }
  return (
    <button
      className={className}
      type={submit ? "submit" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
