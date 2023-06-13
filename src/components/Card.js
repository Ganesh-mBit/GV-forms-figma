import React from 'react';
import { twMerge } from 'tailwind-merge';
import CardTopSection from './CardTopSection';
import CardMiddleSection from './CardMiddleSection';
import Button from './Button';

const Card = ({ title, companyName, companyAddress, parameters, className, buttonLabel, buttonCSS }) => {
  return (
    <div className={twMerge('flex', className)}>
      <CardTopSection title={title} titleCSS="text-2xl font-normal" companyName={companyName} address={companyAddress} addressCSS="text-secondary" className="flex-col w-full" />
      <CardMiddleSection parameters={parameters} className="flex-col gap-2 w-full" />
      <div>
        <Button className={twMerge('py-2 px-4', buttonCSS)}>{buttonLabel}</Button>
      </div>
    </div>
  );
};

export default Card;