import React from 'react'

interface IProps {
    text: string;
    link: string;
}

const BtnUnderline = ({text, link}: IProps) => {
  return (
    <div className='flex'>
        <a href={`#${link}`} className="group font-bold text-lg md:text-xl hover:scale-110 origin-bottom-left transition duration-300">
            {text}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
        </a>
    </div>
  )
}

export default BtnUnderline
