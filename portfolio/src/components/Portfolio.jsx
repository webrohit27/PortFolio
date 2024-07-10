import React, {useState} from 'react'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai'
import ShinyEffect from './ShinyEffect';

const projects = [
    {
        img: project1,
        title: "Project #1",
        description:
          "UI for frontend development using React.",
        links: {
          site: "#",
          github: "#",
        },
      },
      {
        img: project2,
        title: "Project #2",
        description: "A fullstack application built with Node.js and MongoDB.",
        links: {
          site: "#",
          github: "#",
        },
      },
      {
        img: project3,
        title: "Project #3",
        description: "A responsive website designed with modern CSS.",
        links: {
          site: "#",
          github: "#",
        },
      },
      {
        img: project4,
        title: "Project #4",
        description:
          "An e-commerce platform with various features.",
        links: {
          site: "#",
          github: "#",
        },
      },
      {
        img: project5,
        title: "Project #5",
        description: "A mobile-friendly application using React Native.",
        links: {
          site: "#",
          github: "#",
        },
      },
      {
        img: project6,
        title: "Project #6",
        description:
          "A data visualization project using D3.js and other libraries.",
        links: {
          site: "#",
          github: "#",
        },
      }
]

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0)

  return (
    <div className='my-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6 md:py-40' id="portfolio">


<div className='z-10 col-span-3 grid place-items-center grid-cols-1 relative'>
  <p className='text-gray-200 font-bold text-4xl -skew-y-6 '>Select Project</p>
  <img src={arrow} className='absolute w-[50px] top-10 right-12' />

  <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1
   space-y-2 md:space-y-4 text-2xl'>
    {projects.map((project, index) => (
      <li
        key={index}
        onClick={() => setCurrentProject(index)}
        className={`cursor-pointer text-gray-300 rounded-lg px-2 hover:bg-slate-600
         transition duration-300 ${
          currentProject === index ? 'active-project' : ''
        }`}
      >
        {project.title}
      </li>
    ))}
  </ul>
</div>

        




        <div className='z-10 glass  w-full border-2 col-span-5'>
            <div className='w-full h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title} 
                className='w-full h-full object-cover rounded-lg mb-4'/>
            </div>


            <div className='p-6'>
              <p className='text-gray-200 my-4'>
                  {projects[currentProject].description}
              </p>
              <div className='flex space-x-4'>
                  <a href={projects[currentProject].links.site} className='px-4 py-2 bg-slate-600
                   text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
                  <a href={projects[currentProject].links.github} className='px-4 py-2 bg-gray-800
                   text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'>
                    <AiFillGithub/>
                    </a>
              </div>
            </div>
            
        </div>


    </div>
  )
}

export default Portfolio