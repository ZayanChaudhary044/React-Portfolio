import React from 'react'
import linkedin from '../assets/linkedin.png'
import GitHub from '../assets/github.png'


const Footer = () => {
  return (
    <div className='bg-black text-gray-700'>
        <div className='container'>
            <hr className='border-1 border-gray-800 ml-28'/>
            <p className='text-sm text-center ml-36'>You can also find my work on:</p>
        <div>
            <div className='flex justify-center space-x-6 ml-36'>
                <a href='https://www.linkedin.com/in/yusufchaudhary/' target='_blank' rel='noreferrer'>
                    <img src={linkedin} className='w-5 h-5 mt-2 mb-2'/>
                </a>
                <a href='https://github.com/ZayanChaudhary044' target='_blank' rel='noreferrer'>
                    <img src={GitHub} className='w-5 h-5 mt-2 mb-2'></img>
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer