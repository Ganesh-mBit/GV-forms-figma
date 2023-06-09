import React from 'react';
import { twMerge } from 'tailwind-merge';

const TextField = ({ label, placeHolder, className, labelCSS, inputCSS }) => {
  return (
    <div className={twMerge('w-full flex flex-col', className)}>
      <h1 className={twMerge('block', labelCSS)}>{label}&nbsp;</h1>
      <input className={twMerge('border rounded', inputCSS)} type="text" placeholder={placeHolder} />
    </div>
  );
};

export default TextField;