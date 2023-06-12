import React from 'react';
import { twMerge } from 'tailwind-merge';
import CardTopSection from './CardTopSection';
import CardMiddleSection from './CardMiddleSection';
import { JOB_INFO_DATA } from '../json/FieldsData';
import Button from './Button';

const Card = ({ className }) => {
  return (
    <div className={twMerge('flex', className)}>
      <CardTopSection title="UX UI Designer" titleCSS="text-2xl font-normal" companyName="Great Vibes - Information Technology" address="Chennai, Tamilnadu, India (In-office)" className="flex-col w-full" />
      <CardMiddleSection parameters={JOB_INFO_DATA} className="flex-col gap-2 w-full" />
      <div>
        <Button className="bg-[#FFFFFF] text-[#1597E4] outline outline-1 outline-[#1597E4] py-2 px-4">Apply Now</Button>
      </div>
    </div>
  );
};

export default Card;