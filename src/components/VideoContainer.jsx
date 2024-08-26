import React from 'react'
import useFetchApi from '../customHooks/useFetchApi';
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


const VideoContainer = () => {
  const videosList = useFetchApi(YOUTUBE_API_URL);
  return (
    <div className='py-2 flex gap-8 flex-wrap'>
      {
        videosList?.items.map(video => 
          <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard data={video} />
          </Link>
        )
      }
    </div>
  )
}

export default VideoContainer