import React from 'react'

interface IProps {
    text: string;
}

const SectionTag = ({text}: IProps) => {
  return (
    <div className='flex items-center gap-2'>
      <span className='w-[25px] md:w-[50px] h-[1px] bg-black inline-block'></span>
      <p className='text-sm md:text-base'>{text}</p>
    </div>
  )
}

export default SectionTag
