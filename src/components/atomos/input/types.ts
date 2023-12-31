import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  type: string;
  icon?: React.ReactNode;
  name?: string;
  placeholder?: string;
  isPassword?: boolean;
  errorMessage?: string;
}

export interface ITypeProps {
  label?: string;
}
