import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';

const WatchVideo = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(closeMenu());
    }, []);

  return (
    <div className='w-[80%] mx-auto'>
            <iframe 
            className='rounded-lg'
            width="1000" 
            height="500" 
            src={'https://www.youtube.com/embed/'+searchParams.get('v')}title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
            </iframe>

    </div>
  )
}

export default WatchVideo