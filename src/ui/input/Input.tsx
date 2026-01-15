import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input({
  value,
  onChange,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={50}
      {...rest}
    />
  );
}
