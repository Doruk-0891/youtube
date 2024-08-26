import React from 'react'
import useFetchApi from '../customHooks/useFetchApi';
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard from './VideoCard';


const VideoContainer = () => {
  const videosList = useFetchApi(YOUTUBE_API_URL);
  return (
    <div className='py-2 flex gap-8 flex-wrap'>
      {
        videosList?.items.map(video => 
          <VideoCard data={video} key={video.id} />
        )
      }
    </div>
  )
}

export default VideoContainer