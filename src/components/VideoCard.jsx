import React from 'react'
import { viewsLikesConvertor, getPublishedTime } from '../utils/helper';

const VideoCard = ({data}) => {
    const {snippet, statistics} = data;
    const {publishedAt, title, thumbnails, channelTitle} = snippet;

  return (
    <div className='flex flex-col'>

        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-md block w-full h-full object-cover bg-gray-200' />
        <h3 className='font-bold mt-1'>{title}</h3>
        <h3 className='font-bold text-gray-700 mt-2'>{channelTitle}</h3>
        <h3 className='font-bold text-gray-700'>
          {
            data && `${viewsLikesConvertor(statistics?.['viewCount'])} views - ${getPublishedTime(publishedAt)}`
          }
        </h3>
    </div>
  )
}

export default VideoCard