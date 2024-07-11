import React from "react";
// import profilepic from "../assets/ppic.png";
import profilepic1 from "../assets/rpic3.png"


import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiExpress, SiPostman, SiMongodb } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  // DiSass,
  DiBootstrap,
  DiDatabase
 
} from 'react-icons/di'
import ShinyEffect from "./ShinyEffect";



const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 md:py-40" id="home">



      <div className="grid grid-cols-2 md:col-span-5 glass p-8">

      <div className="my-auto">
        <img
          className="w-[800px] mx-auto h-auto "
          src={profilepic1}
          // src={profilepic}
          alt="profile pic"
        />
      </div>



      <div className="my-auto ml-8  flex-col">
        <p className="text-2xl md:text-4xl font-bold text-gray-200">
          Hi! I am <br/> Rohit <br/>

        <TypeAnimation
            sequence={[
              "React Js Dev",
              1000,
              "Node Js Dev",
              1000,
              "Fullstack Dev",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          
          </p>
          <p className="text-xl md:text-3xl font-bold text-gray-500">
          "New Horizon | Boundless Potential"
            

          </p>
          <button
            href="/"
            title="Download CV"
            role="button"
            className="mt-4 px-4 py-2 text-lg font-bold text-white  bg-primary-color rounded-xl">
            Download CV 
          </button>
      </div>
      </div>


      <div className="grid grid-cols-1  md:col-span-3 gap-6">

        
        <div className="text-5xl p-12 glass">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">My Tech Stack</p>
          <div className="grid grid-cols-4 gap-4">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            {/* <DiBootstrap className="text-purple-600" />  */}
            <DiJavascript1 className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
            <SiMongodb className="text-black"/>
            <SiExpress className="text-gray-300"/>
            <SiPostman className="text-orange-500"/>
          </div>
              
        </div>
        

        <div className="flex justify-center items-center flex-col glass">


        <div className="text-7xl flex justify-start gap-4">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="text-gray-600" />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="text-gray-600" />
         </a>
                <AiFillInstagram className="text-gray-600" />
           </div>


        </div>



        <div className='absolute inset-0 overflow-hidden md:overflow-visible'>
            <div className='hidden md:block'>
                <ShinyEffect left={550} top={100} size={700} />
            </div>

        </div>
        
        


      </div>



    </div>
  );
};

export default Hero;
