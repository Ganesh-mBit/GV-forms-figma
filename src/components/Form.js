import React from 'react';
import { twMerge } from 'tailwind-merge';

const Form = ({ children, className }) => {
  return (
    <div className={twMerge('w-full flex flex-col', className)}>
      {children}
    </div>
  )
}

export default Form;