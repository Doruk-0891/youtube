import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const VideoCardShimmer = () => {
    return (
        <section className='flex flex-col gap-2 animate-pulse p-2 rounded-md'>
            
            <div className='rounded-md w-full h-52 bg-slate-400'></div>
            <div className='h-4 bg-slate-400 p-2'></div>
            <div className='h-4 mt-2 bg-slate-400 p-2'></div>
            <div className='h-4 bg-slate-400 p-2'></div>
            
        </section>
    );
};

const HomePageShimmer = () => {
    const tempArr = Array(50).fill(0);

  return (
    <section className='grid grid-cols-auto-fill-300'>
        {
         tempArr.map(item => <VideoCardShimmer key={uuidv4()} />) 
        }

    </section>
  )
}

export default HomePageShimmer