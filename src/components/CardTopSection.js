import React from 'react';
import { twMerge } from 'tailwind-merge';

const CardTopSection = ({ title, titleCSS, companyName, companyNameCSS, address, addressCSS, className }) => {
  return (
    <div className={twMerge('flex', className)}>
      <h1 className={twMerge('text-[#212121]', titleCSS)}>{title}</h1>
      <p className={companyNameCSS}>{companyName}</p>
      <p className={addressCSS}>{address}</p>
    </div>
  );
};

export default CardTopSection;