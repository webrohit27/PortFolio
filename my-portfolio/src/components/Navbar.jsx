import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (

    <div className='max-w-[1200px] bg-red-200 h-24 mx-auto flex justify-between items-center text-lg'>

        <h1 className='text-3xl font-bold'>Rohit</h1>

        <ul className='hidden md:flex'> 
            <li className='p-5'><Link to="/about">About</Link></li>
            <li className='p-5'><Link to="/about">Experience</Link></li>
            <li className='p-5'><Link to="/about">Contact</Link></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden z-40'>
            {nav ? < AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
        </div>
 
        <div>

          <ul className='p-8 text-2xl'> 
            <li className='p-5'><Link to="/about">About</Link></li>
            <li className='p-5'><Link to="/about">Experience</Link></li>
            <li className='p-5'><Link to="/about">Contact</Link></li>
          </ul>

        </div>
          

    </div>
  )
}

export default Navbar