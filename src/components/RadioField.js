import React from 'react'
import { twMerge } from 'tailwind-merge';

const RadioField = ({ className, label, labelCSS }) => {
  return (
    <div className={twMerge('w-full flex flex-col', className)}>
      <h1 className={twMerge('block', labelCSS)}>{label}&nbsp;</h1>
      <div className='flex gap-1'>
        <input className='border-2 border-[#7A7A7A]' id='quick' type="radio" />
        <label htmlFor="quick" className={twMerge('block text-sm text-[#7A7A7A]')}>Quick apply</label>
      </div>
    </div>
  );
}

export default RadioField;
