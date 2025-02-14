'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import navLogo from '@/public/img/navLogo.png';
import { FcAdvance } from "react-icons/fc";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-[#02191D] bg-cover p-[2rem] overflow-hidden rounded-lg border-[#24A0B5] border-[1px]'>
      <nav className='flex justify-between items-center'>

        <div>
          <Image src={navLogo} alt='god' />
        </div>

  
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-[#fafafa]'>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

      
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:flex-row lg:items-center lg:gap-[2rem] absolute lg:static top-[6rem] left-0 w-full lg:w-auto bg-[#02191D] lg:bg-transparent p-4 lg:p-0`}
        >
          <ul className='flex flex-col lg:flex-row text-[#fafafa] pgTitle gap-[2rem]'>
            <li>Event</li>
            <li>Ticket</li>
            <li>Product</li>
          </ul>
        </div>

    
        <div className='hidden lg:block'>
          <button className='bg-[#fff] p-[0.5rem] rounded-lg border-none flex'>
           <div className='pt-[2px] text-2xl font-bold'>My Ticket</div> 
            <FcAdvance size={32} color='#fff'/>
          </button>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;