// components/Button.tsx

import React, { FC, ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, styles }) => {
  const classNames = `border rounded-sm px-4 py-2 hover:bg-opacity-75 ${styles} `;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};


