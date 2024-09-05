import React from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  const sidebarMenuListItems = ['Home', 'Shorts', 'Subscriptions'];

  if (!isMenuOpen) return null;
  
  return (
      <div className='overflow-y-auto'>
          <ul className='pl-5'>
            {
              sidebarMenuListItems.map(item => 
                <li className='py-2 rounded-full px-3 hover:bg-gray-300 cursor-pointer font-bold' key={uuidv4()}>{item}</li>
              )
            }
          </ul>
      </div>
    
  )
}

export default Sidebar;