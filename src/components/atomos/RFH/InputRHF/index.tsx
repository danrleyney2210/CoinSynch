import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { Input } from "../../input";
import { IInputProps } from "../../input/types";

export interface IInputRHF extends IInputProps {
  name: string;
}

export function InputRHF<FormType extends FieldValues>({
  label,
  control,
  id,
  name,
  placeholder,
  isPassword,
  type,
  rules,
  ...rest
}: UseControllerProps<FormType> & IInputRHF) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Input
          errorMessage={fieldState.error?.message}
          label={label}
          isPassword={!!isPassword}
          id={id}
          type={type}
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          {...rest}
        />
      )}
    />
  );
}
