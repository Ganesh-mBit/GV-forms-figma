import React from 'react';
import { twMerge } from 'tailwind-merge';

const TwoTextFieldSide = ({ className, fields = [] }) => {
  return (
    <div className={twMerge('flex', className)}>
      {fields?.map((item) => (
        <TextField label={item?.label} placeHolder={item?.placeHolder} className={item?.className} />
      ))}
    </div>
  )
}

export default TwoTextFieldSide