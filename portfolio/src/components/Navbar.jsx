import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

  return (

    <div className='flex text-4xl justify-between items-center text-gray-200 px-6 max-w-[1300px] mx-auto h-24'> 
         <a href="">Desi</a>

         <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
            <li className='relative group'>
                <Link to='about' smooth={true} offset={50} duration={50}>About</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-100 transition-transform duration-300 ease-in-out'></span>
            </li>

            <li className='relative group'>
                <Link to='portfolio' smooth={true} offset={50} duration={50}>Portfolio</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-100 transition-transform duration-300 ease-in-out'></span>
            </li>

            <li className='relative group'>
                <Link to='contact' smooth={true} offset={50} duration={50}>Contact</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-100 transition-transform duration-300 ease-in-out'></span>
            </li>
            

            

         </ul>

         <div onClick={toggleNav} className='md:hidden z-30'>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
         </div>

         <div>
            <ul className='font-semibold gap-12d'>
                <li><Link to='about' smooth={true} offset={50} duration={500}>About</Link></li>

                <li><Link to='portfolio' smooth={true} offset={50} duration={500}>Portfolio</Link></li>

                <li><Link to='contact' smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
            </ul> 
         </div>

    </div>
   
  )
}

export default Navbar
