import React from 'react'

const Socials = () => {
  return (
    <div>
        <ul className='flex w-full gap-3 transition-all'>
            <a className='w-9 hover:scale-105 transition-all' href="https://github.com/AsleyR" target={'_blank'} rel="noreferrer">
                <img className='object-cove max-w-full h-auto' src='./images/socials/github.svg' alt='Github Logo'></img>
            </a>
            <a className='w-9 hover:scale-105 transition-all' href="https://www.linkedin.com/in/asleyr/" target={'_blank'} rel="noreferrer">
                <img className='object-cover max-w-full h-auto' src='./images/socials/linkedin.svg' alt='Linkedin Logo'></img>
            </a>
            </ul>
    </div>
  )
}

export default Socials
