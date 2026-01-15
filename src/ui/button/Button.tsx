import { ReactNode, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonStyle?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'big';
}

export default function Button({
  children,
  onClick,
  disabled = false,
  buttonStyle = 'primary',
  size = 'medium',
  ...rest
}: ButtonProps) {
  const classes = cn(styles.button, {
    [styles['button--primary']]: buttonStyle === 'primary',
    [styles['button--secondary']]: buttonStyle === 'secondary',

    [styles['button--small']]: size === 'small',
    [styles['button--medium']]: size === 'medium',
    [styles['button--big']]: size === 'big',

    [styles['button--disabled']]: disabled,
  });

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
