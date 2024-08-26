import React from 'react'
import VideoContainer from './VideoContainer';
import FilterList from './FilterList';

const MainContainer = () => {
  return (
    <div className='p-2'>
        <FilterList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;