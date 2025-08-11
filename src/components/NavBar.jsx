import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl pr-0 font-bold hidden md:inline hover:animate-wiggle-more'>YC</div>
            <div className='space-x-7'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <a href='https://www.linkedin.com/in/yusufchaudhary/' target='_blank' rel='noreferrer'>
                <button className='con_butt bg-gradient-to-br from-yellow-600 to to-red-700 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect With Me</button>
            </a>
        </div>
    </nav>
    )
}

export default NavBar
