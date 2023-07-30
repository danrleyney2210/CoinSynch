import { useFormContext, Controller, RegisterOptions } from 'react-hook-form';
import { Input } from '../../input';
import { IInputProps } from '../../input/types';

export interface IInputRHF extends Omit<IInputProps, 'name'> {
  name: string;
  rules?: RegisterOptions<any, any>;
}

export const InputRHF = ({
  label,
  id,
  name,
  placeholder,
  isPassword,
  type,
  rules,
  ...rest
}: IInputRHF) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <Input
          {...rest}
          label={label}
          isPassword={!!isPassword} // Ensure it's boolean (convert to true/false)
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)} // Pass only the value to onChange
        />
      )}
    />
  );
};
