import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Search from './Search';
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }
  return (
    <header className='px-5 flex items-center justify-between gap-10 lg:gap-20 bg-white h-[75px]'>
        <div className={`items-center flex-shrink-0 gap-4 ${!showFullWidthSearch ? 'flex' : 'hidden md:flex'}`}>
          <span className='cursor-pointer p-3 hover:bg-gray-300 rounded-full' onClick={() => handleToggleMenu()}>
          <AiOutlineMenu />

          </span>
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt='youtube logo' className='w-32 mx-4' />

        </div>
        <div className={`items-center flex-grow max-w-[600px] gap-2 justify-center ${showFullWidthSearch ? 'flex py-3' : 'hidden md:flex'}`}>
            <MdOutlineArrowBack className='2xl md:hidden cursor-pointer' onClick={() => setShowFullWidthSearch(false)} />
            <Search />
        </div>

        <div className={`items-center flex-shrink-0 gap-4 md:gap-2 ${!showFullWidthSearch ? 'flex' : 'hidden md:flex'}`}>
            <IoIosSearch className='md:hidden text-2xl cursor-pointer' onClick={() => setShowFullWidthSearch(true)} />
            <CgProfile className='text-4xl' />
        </div>


    </header>
  )
}

export default Header;