import React from 'react';
import { twMerge } from 'tailwind-merge';

const CardMiddleSection = ({ parameters = [], className }) => {
  return (
    <div className={twMerge('flex', className)}>
      {parameters?.map((item, id) => (
        <p className={twMerge('', item.className)}>{item.desc}</p>
      ))}
    </div>
  );
};

export default CardMiddleSection;