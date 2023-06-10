import React from 'react';
import { twMerge } from 'tailwind-merge';

const Dialog = ({ className, children }) => {
  return (
    <div className={twMerge('flex flex-col', className)}>
      {children}
    </div>
  )
}

export default Dialog;