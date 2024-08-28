import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { viewsLikesConvertor, getPublishedTime } from '../utils/helper';

const VideoCard = ({data}) => {
    const {snippet, statistics} = data;
    const {publishedAt, title, thumbnails, channelTitle} = snippet;

  return (
    <div className='w-60'>
        <div>
            <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-md' />
        </div>
        <div className='grid grid-flow-col'>
            <div className='col-span-11 p-2'>
                <h3 className='font-bold'>{title}</h3>
                <h3 className='font-bold text-gray-400 mt-2'>{channelTitle}</h3>
                <h3 className='font-bold text-gray-400'>
                    {
                    statistics?.['viewCount'] && 
                    `${viewsLikesConvertor(statistics?.['viewCount'])} views &bull;` } {getPublishedTime(publishedAt)}
                </h3>
            </div>
            <div className='col-span-1 pt-2'>
                <HiDotsVertical />
            </div>
        </div>
    </div>
  )
}

export default VideoCard