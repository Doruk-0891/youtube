import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { viewsLikesConvertor, getPublishedTime } from '../utils/helper';

const VideoCard = ({data}) => {
    const {snippet, statistics} = data;
    const {publishedAt, title, thumbnails, channelTitle} = snippet;

  return (
    <div className='flex flex-col'>

        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-md block w-full h-full object-cover bg-gray-200' />
        <div className='flex justify-between gap-10'>
            <h3 className='font-bold'>{title}</h3>
            <HiDotsVertical className='text-2xl' />
        </div>
        <h3 className='font-bold text-gray-700 mt-2'>{channelTitle}</h3>
        <h3 className='font-bold text-gray-700'>
            {
            statistics?.['viewCount'] && 
            `${viewsLikesConvertor(statistics?.['viewCount'])} 
            views`} &bull; 
            {getPublishedTime(publishedAt)}
        </h3>
    </div>
  )
}

export default VideoCard