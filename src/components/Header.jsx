import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] py-[5px] items-center flex justify-between mx-auto'>
        <div className='font-bold text-3xl'>
          Tridev It Solutions
        </div>

        {
          toggle ?
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-xl md:hidden block' />
            :
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-xl md:hidden block' />
        }

        <ul className='hidden md:flex text-white gap-10'>
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive Menu */}
        <ul className={`duration-300 md:hidden sm:top-70 w-full h-screen text-white fixed bg-black top-[78px]
        ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
          <li className='p-5'>Home</li>
          <li className='p-5'>Company</li>
          <li className='p-5'>Resources</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
