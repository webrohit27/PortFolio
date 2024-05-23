import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(false)
    }

  return (
    <div className='flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1300px] mx-auto h-24' >
        <a href=''> Rohit </a>

        <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
           <li className='relative group'>
            <Link to="about" smooth={true} offset={50} duration={500}> About </Link>
            <span className='absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100' ></span></li>
        </ul>

        <div onClick={toggleNav}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div>
            <ul>
                <li><Link></Link></li>
            </ul>
        </div>


    </div>
  )
}
 
export default Navbar
