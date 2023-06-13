import React from 'react';
import { twMerge } from 'tailwind-merge';

const Image = ({ className, url, imagesCSS }) => {
  return (
    <div className={twMerge('', className)}>
      <img className={twMerge('', imagesCSS)} src={url} alt="logo" />
    </div>
  );
};

export default Image;