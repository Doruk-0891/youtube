import React, { useEffect } from 'react'
import VideoContainer from './VideoContainer';
import FilterList from './FilterList';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const MainContainer = () => {
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(toggleMenu(true));
  }, []);

  return (
    <div className='p-2 pt-0 overflow-x-hidden h-full overflow-y-auto'>
        <div className='sticky top-0 z-10 bg-white pb-4'>
          <FilterList />
        </div>
        {/* <VideoContainer /> */}
    </div>
  )
}

export default MainContainer;