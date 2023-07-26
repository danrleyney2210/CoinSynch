import { ButtonHTMLAttributes } from "react";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  text: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export type IButtonSizeProps = {
  t?: "small" | "medium" | "large";
};
