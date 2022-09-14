import React from 'react'

interface IProps {
    text: string;
    link: string;
}

const BtnUnderline = ({text, link}: IProps) => {
  return (
    <div className='flex'>
        <a href={`#${link}`} className="group font-bold text-lg active:scale-110 md:active:scale-100 md:text-xl md:hover:scale-110 md:origin-bottom-left transition duration-300">
            {text}
            <span className="md:block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
        </a>
    </div>
  )
}

export default BtnUnderline
