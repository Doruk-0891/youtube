import React, { useEffect, useState } from 'react'
import useFetchApi from '../customHooks/useFetchApi';
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


const VideoContainer = () => {
  const {fetchData} = useFetchApi();
  const [videosList, setVideosList] = useState([]);
  const [apiStatus, setApiStatus] = useState({error: '', isLoading: false});

  useEffect(() => {
    setApiStatus(prev => ({...prev, isLoading: true}));

    fetchData(YOUTUBE_API_URL).then((data) => {
      if(data['error']) {
        setApiStatus(prev => ({...prev, error: data['error']}));
        return;
      }

      setVideosList(data['apiData']['items']);
      
    }).catch(err => {
      setApiStatus(prev => ({...prev, error: err.message}));
    }).finally(() => {
      setApiStatus(prev => ({...prev, isLoading: false}));
    });

  }, []);


  if (apiStatus['error']) {
    return <></>;
  }

  return (
    <>
      {
        apiStatus['isLoading'] 
        ? 
        <h2>Loading...</h2> 
        : 
        <div className='py-2 flex gap-x-4 gap-y-8 flex-wrap'>
          {
            videosList.length > 0 && videosList.map(video => 
              <Link to={`/watch?v=${video.id}`} key={video.id}>
                <VideoCard data={video} />
              </Link>
            )
          }
        </div>
      }
    </>
  )
}

export default VideoContainer