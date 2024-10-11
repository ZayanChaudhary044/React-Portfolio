import React from 'react'
import proj1 from '../assets/project-1.png'
import proj2 from '../assets/project-2.png'
import proj3 from '../assets/project-3.png'

const projects = [
  {
    title: 'MovieNote',
    lang: 'React.js, CSS, JavaScript, MovieDB API',
    img: proj1,
    desc: 'Movie Checklist App that allows users to search for, add and remove movies to their watchlist.',
    link: 'https://github.com/ZayanChaudhary044/MovieNote'
  }
  ,
  {
    title: 'PHP Portfolio',
    lang: 'PHP, CSS, HTML, JavaScript, MAMP',
    img: proj2,
    desc: 'A portfolio project showcasing my projects and skills.Uses MAMP to run a local server and store information in a database.',
    link: 'https://github.com/ZayanChaudhary044/PHP-Portfolio'
  }
  ,
  {
    title: 'Calculator App',
    lang: 'Swift',
    img: proj3,
    desc: 'A simple calculator app that follows the user interface of the iOS calculator app.',
    link: 'https://github.com/ZayanChaudhary044/Calculator'
  }
]

export const Projects = () => {
  return (
    <div className='bg-black text-white' id='projects'>
        <div className='container mx-auto px-10 md:px-16 lg:px-24'>
            <h2 className='text-3xl font-bold text-center mb-14'>Projects</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-10'>
                    {projects.map((project, index) => (
                        <div key={index} className='bg-gray-800 p-6 rounded-lg mb-6 md:w-1/3'>
                            <h3 className='text-xl font-bold'>{project.title}</h3>
                            <p className='text-gray-400 mb-4'>{project.lang}</p>
                            <img src= {project.img} className='w-50 h-50 rounded-lg' alt='project'/>
                            <p className='mb-4'>{project.desc}</p>
                            <button className='bg-gray-950 flex justify-center p-3 rounded-full transform transition-transform duration-300 hover:scale-110'><a href={project.link} className='text-blue-500 hover:text-yellow-400'>View on GitHub</a></button>
                        </div>
                    ))}    
            </div>    
        </div>
    </div>
  )
}

export default Projects;
