import React from 'react';
import Image from './Image';
import Card from './Card';
import { twMerge } from 'tailwind-merge';

const JobCard = ({ item, className }) => {
  return (
    <div className={twMerge('flex', className)}>
      <Image url={item?.imgUrl} />
      <Card title={item.title} companyName={item.companyName} companyAddress={item.companyAddress} parameters={item.parameters} buttonLabel={item.buttonLabel} buttonCSS={item.buttonCSS} className="flex-col gap-6" />
    </div>
  )
}

export default JobCard;