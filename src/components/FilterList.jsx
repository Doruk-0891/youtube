import React, { useEffect, useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import useFetchApi from '../customHooks/useFetchApi';
import { YOUTUBE_SEARCH_API_URL, FILTERS_LIST, TRANSLATE, YOUTUBE_API_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { clearVideosList, setVideosList } from '../utils/videoSlice';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const FilterList = () => {
  const {fetchData} = useFetchApi();
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const filterContainerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedFilter !== null) {
      searchBasedOnFilters();
    }
  }, [selectedFilter]);

  const searchBasedOnFilters = async () => {
    let url = `${YOUTUBE_SEARCH_API_URL}${selectedFilter}`;

    if (selectedFilter === 'All') {
      url = `${YOUTUBE_API_URL}`;
      dispatch(clearVideosList());
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
    <section className='overflow-x-hidden relative' ref={filterContainerRef}>
      <div className='flex gap-3 whitespace-nowrap transition-transform w-[max-content]' style={{
        transform: `translateX(-${translate}px)`
      }}>
          {
              FILTERS_LIST.map(filter => 
                  <Button name={filter} key={uuidv4()} handlerFunction={handleFilterSelection} isActive={selectedFilter === filter} />
              )
          }
          
      </div>
      {
        isLeftVisible && 
        <div className='absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-12 h-full'>
            <button className='font-bold rounded-full hover:bg-gray-300 w-auto h-full aspect-square p-1.5 flex items-center justify-center' onClick={() => {
              setIsRightVisible(true);
              setTranslate(prevTranslate => {
                let newTranslate = prevTranslate - TRANSLATE;
                if (newTranslate <= 0) {
                  setIsLeftVisible(false);
                  return 0;
                };
                return newTranslate;
              })
            }}>
              <FaChevronLeft />
            </button>
        </div>
      }
      {
        isRightVisible && 
        <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-12 h-full flex justify-end'>
            <button className='font-bold rounded-full hover:bg-gray-300 w-auto h-full aspect-square p-1.5 flex items-center justify-center' onClick={() => {
              setIsLeftVisible(true);
              setTranslate(prevTranslate => {
                let newTranslate = prevTranslate + TRANSLATE;
                const edge = filterContainerRef.current.scrollWidth;
                const visibleWidth = filterContainerRef.current.clientWidth;

                if (newTranslate + visibleWidth >= edge) {
                  setIsRightVisible(false);
                  return edge - visibleWidth;
                }
                return newTranslate;
              })
            }}>
              <FaChevronRight />
            </button>
        </div>
      }
    </section>
  )
}

export default FilterList