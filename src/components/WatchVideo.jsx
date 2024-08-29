import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import { PiThumbsUpFill, PiThumbsUpLight } from "react-icons/pi";
import Comments from './Comments';

const WatchVideo = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const {snippet} = location.state;
    const {title, description, channelTitle} = snippet;
    const [showMore, setShowMore] = useState(false);
    
    useEffect(() => {
        dispatch(closeMenu());
    }, []);

  return (
    <section className='w-[80%] mx-auto mb-3'>
      <div>
              <iframe 
              className='rounded-lg'
              width="100%" 
              height="500" 
              src={'https://www.youtube.com/embed/'+searchParams.get('v')}title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
              </iframe>
              <h2 className='text-2xl font-bold py-2'>{title}</h2>
              <div className='flex justify-between items-center'>
                <h4 className='font-bold text-lg'>{channelTitle}</h4>
                <div className='flex items-center gap-5'>
                  <button className='border-none outline-none'><PiThumbsUpLight size={32} /></button>
                  <button className='bg-red-600 text-white rounded-full px-5 py-3 font-bold'>Subscribe</button>
                </div>
              </div>
              <div className='font-bold my-3 p-3 bg-gray-300 rounded-2xl'>
                <h5 className='py-2'>Description</h5>
                <p>{showMore ? description : description.substring(0, 250)+'...'}</p>
                
                <button className='text-red-600' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button>
              </div>
              <Comments />

      </div>
    </section>
  )
}

export default WatchVideo