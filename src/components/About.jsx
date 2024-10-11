import React from 'react'

//animation required at under h2
const About
 = () => {
  return (
    <div className='bg-black text-white py-36' id='about'>
        <div className='container mx-auto px-10 md:px-16 lg:px-24'>
            <h2 className='text-3xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-10'>
                <div className='flex-1'>
                <p className='text-lg  text-center mb-8'>
                    I am an enthuasiastic Computer Science Student who takes an interest in creating functional websites, solving complex problems using algorithms and bringing new ideas to life using technology. I am familiar with React.js, proficient with HTML, CSS and JS as well as being fluent in Python and Java.
                </p>
                </div>
            </div>
            <div className="skeleton stats shadow text-center flex">
                <div className="stat">
                    <div className="stat-figure text-primary">
                    
                    </div>
                    <div className="stat-title">Experience</div>
                    <div className="stat-value text-yellow-400">2+ Years</div>
                </div>
                
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    
                    </div>
                    <div className="stat-title">Projects</div>
                    <div className=" stat-value text-yellow-400">10+</div>
                </div>

                <div className="stat">
                    <div className="stat-value text-yellow-400">25+</div>
                    <div className="stat-title">LeetCode Qs done</div>
                    <div className="stat-desc text-orange-500">Many more to go</div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default About
