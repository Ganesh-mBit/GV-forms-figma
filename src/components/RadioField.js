import React from 'react';
import { twMerge } from 'tailwind-merge';

const RadioField = ({ className, label, labelCSS, fields = [] }) => {
  return (
    <div className={twMerge('w-full flex flex-col', className)}>
      <h1 className={twMerge('block', labelCSS)}>{label}&nbsp;</h1>
      <div className='flex gap-5 h-9 items-center'>
        {fields?.map((item, id) => (
          <div key={id} className={twMerge('flex items-center cursor-pointer', item.className)}>
            {/* <input className='w-5 h-5' id={item.value} type="radio" value={item.value} /> */}
            <span className='w-5 h-5 rounded-full border-2 border-[#D8D8D8]' />
            <label htmlFor={item.value} className={twMerge('block text-sm text-[#7A7A7A]')}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioField;
