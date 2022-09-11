import React from 'react'
import SectionTag from '../SectionTag'

const Contact = () => {
  return (
    <div className='py-[6rem]' id='contact'>
        <SectionTag text='CONTACT ME'/>
        <div className='grid grid-cols-auto gap-5 pr-0 lg:pr-[25rem] mt-16 transition-all'>
            <h1 className='text-2xl md:text-4xl font-bold transition-all'>
                <a className='hover:text-gray-700 duration-50' href="mailto:asleyrobleto@gmail.com">asleyrobleto@gmail.com</a>
            </h1>
            <p className='text-lg md:text-xl leading-9 transition-all'>
                I'm always down to collaborate when I have the time. I'm dream of becoming a great developer and one day disrupt the tech ecosystem with a cool project.
            </p>
            <div>
                <ul className='flex w-full gap-3 transition-all'>
                    <a className='w-9' href="https://github.com/AsleyR" target={'_blank'}>
                        <img className='object-cove max-w-full h-auto' src='./images/socials/github.svg'></img>
                    </a>
                    <a className='w-9' href="https://www.linkedin.com/in/asleyr/" target={'_blank'}>
                        <img className='object-cover max-w-full h-auto' src='./images/socials/linkedin.svg'></img>
                    </a>
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact
