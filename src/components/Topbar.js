import React from 'react'
import { twMerge } from 'tailwind-merge'

const Topbar = ({ leftLabel, rightLabel, className, leftLabelCSS, rightLabelCSS }) => {
  return (
    <div className={twMerge('w-full flex justify-between', className)}>
      <h1 className={leftLabelCSS}>{leftLabel}</h1>
      <h3 className={rightLabelCSS}>{rightLabel}</h3>
    </div>
  )
}

export default Topbar