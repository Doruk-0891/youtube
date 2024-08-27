import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Search from './Search';
import { CgProfile } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }
  return (
    <header className='px-5 grid grid-flow-col sticky top-0 z-50 bg-white gap-2'>
        <div className='flex items-center col-span-1'>
          <span className='cursor-pointer p-3 hover:bg-gray-300 rounded-full' onClick={() => handleToggleMenu()}>
          <AiOutlineMenu />

          </span>
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt='youtube logo' className='w-32 mx-4' />

        </div>
        <div className='col-span-10 flex items-center'>
            <Search />
        </div>
        <div className='col-span-1 flex items-center'>
            <CgProfile size={64} />
        </div>


    </header>
  )
}

export default Header;