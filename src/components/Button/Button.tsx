import type { ReactNode, ButtonHTMLAttributes } from "react";

import { cn } from "@utils/classNames.ts";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  isDisabled: boolean;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    size = "lg",
    isLoading = "false",
    variant = "primary",
    isDisabled = "false",
    ...otherProps
  } = props;
  return (
    <button
      className={cn(
        cls.button,
        cls[variant],
        cls[size],
        {
          [cls.loading]: isLoading,
          [cls.disabled]: isDisabled,
        },
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
