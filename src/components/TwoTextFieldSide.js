import React from 'react';
import { twMerge } from 'tailwind-merge';
import TextField from './TextField';

const TwoTextFieldSide = ({ className, fields = [] }) => {
  return (
    <div className={twMerge('flex', className)}>
      {fields?.map((item) => (
        <TextField labelCSS="text-sm text-font_dark" inputCSS="h-[36px] text-sm placeholder-secondary px-3 py-2"  label={item?.label} placeHolder={item?.placeHolder} className={item?.className} />
      ))}
    </div>
  )
}

export default TwoTextFieldSide