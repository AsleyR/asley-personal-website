import React from 'react'

interface IProps {
    text: string;
}

const ProjectTag = ({text}: IProps) => {
  return (
    <div className='bg-gray-100 rounded-full px-4'>
      <p className='text-[#6c6c6c]'>{text}</p>
    </div>
  )
}

export default ProjectTag
