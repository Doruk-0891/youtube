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
    <header className='px-5 flex justify-between items-center'>
        <div className='flex items-center'>
        <span className='cursor-pointer p-3 hover:bg-gray-300 rounded-full' onClick={() => handleToggleMenu()}>
        <AiOutlineMenu />

        </span>
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt='youtube logo' className='w-48 mx-4' />

        </div>
        <div>
            <Search />
        </div>
        <div>
            <CgProfile size={64} />
        </div>


    </header>
  )
}

export default Header;