import React from 'react';
import { twMerge } from 'tailwind-merge';
import TextField from './TextField';

const TwoTextFieldSide = ({ className, fields = [] }) => {
  return (
    <div className={twMerge('flex', className)}>
      {fields?.map((item) => (
        <TextField labelCSS="text-sm text-[#212121]" inputCSS="h-[36px] text-sm placeholder-[#7A7A7A] px-3 py-2"  label={item?.label} placeHolder={item?.placeHolder} className={item?.className} />
      ))}
    </div>
  )
}

export default TwoTextFieldSide