import { ButtonHTMLAttributes } from "react";

export const Button = (
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button className="throw-btn" {...buttonProps}>
      chuck it into the void
    </button>
  );
};
