import React from 'react'
import Resume from '../assets/YusufChaudhary_CV.pdf'

const Hero = () => {
  return (
    <div className=' bg-black text-white text-center py-52'>
        <h1 className='text-5xl font-bold '>I'm {" "}
        <span className='animate-fade-right text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to to-red-700'>Yusuf Chaudhary</span>
        </h1>
        <p className='mt-4 text-gray-400'>Currently Studying Computer Science at QMUL</p>
       <div className='mt-24'>
       <div className='mt-8'>
        <a href='https://www.linkedin.com/in/zayanchaudhary/' target='_blank' rel='noreferrer'>
            <button className='bg-gradient-to-br from-yellow-600 to to-red-700 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect With Me</button>
        </a>
        </div>
        <div className='mt-8'>
          <a href = {Resume}>
            <button className='bg-gradient-to-br from-blue-600 to to-gray-900 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>View My Resume</button>
            </a>
        </div>
       </div>
    </div>

  )
}

export default Hero

//animation or image required above h1