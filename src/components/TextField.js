import React from 'react';
import { twMerge } from 'tailwind-merge';

const TextField = ({ label, required, placeHolder, className, labelCSS, inputCSS }) => {
  return (
    <div className={twMerge('w-full flex flex-col', className)}>
      <h1 className={twMerge('block', labelCSS)}>{label}{required&&<span className='text-error'>*</span>}&nbsp;</h1>
      <input className={twMerge('border border-card_border rounded', inputCSS)} type="text" placeholder={placeHolder} />
    </div>
  );
};

export default TextField;