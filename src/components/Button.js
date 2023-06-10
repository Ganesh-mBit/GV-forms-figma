import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className }) => {
  return (
    <button className={twMerge('rounded', className)}>
      {children}
    </button>
  )
}

export default Button;