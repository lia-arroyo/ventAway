import { ButtonHTMLAttributes } from "react";

export const Button = (
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button className="throw-btn" {...buttonProps}>
      throw it away
    </button>
  );
};
