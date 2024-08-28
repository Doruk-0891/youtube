import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import useFetchApi from '../customHooks/useFetchApi';
import { YOUTUBE_API_URL, YOUTUBE_SEARCH_API_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setVideosList } from '../utils/videoSlice';

const FilterList = () => {
  const {fetchData} = useFetchApi();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const dispatch = useDispatch();
  const filters = ['All', 'Javascript', 'React', 'Skills', 'Frontend', 'Live', 'Sales'];

  useEffect(() => {
    console.log('filters');
    searchBasedOnFilters();
  }, [selectedFilter]);

  const searchBasedOnFilters = async () => {
    let url = '';
    if (selectedFilter === 'All') {
      url = `${YOUTUBE_API_URL}`;
    } else {
      url = `${YOUTUBE_SEARCH_API_URL}${selectedFilter}`;
    }

    try {
      const {apiData, error} = await fetchData(url);
      dispatch(setVideosList(apiData['items']));
    } catch (error) {
      console.error(error);
    }
  }

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  }

  return (
    <section className='flex gap-3'>
        {
            filters.map(filter => 
                <Button name={filter} key={uuidv4()} handlerFunction={handleFilterSelection} isActive={selectedFilter === filter} />
            )
        }
        
    </section>
  )
}

export default FilterList