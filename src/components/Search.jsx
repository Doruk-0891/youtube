import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_SEARCH_API_URL, YOUTUBE_SUGGESTIONS_API_URL } from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import { cacheSuggestions } from '../utils/searchSlice';
import {v4 as uuidv4} from 'uuid';
import useFetchApi from '../customHooks/useFetchApi';
import { setVideosList } from '../utils/videoSlice';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search);
  const {fetchData} = useFetchApi();

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionsList(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);


  const getSuggestions = async () => {
    const url = `${YOUTUBE_SUGGESTIONS_API_URL}${searchQuery}`;
    try {
      const {apiData, error} = await fetchData(url);
      setSuggestionsList(apiData[1]);
      dispatch(cacheSuggestions({
        [searchQuery]: apiData[1]
      }));
    } catch (error) {
      console.error(error);
    }
  }

  const getSearchedResults = async () => {
    const url = `${YOUTUBE_SEARCH_API_URL}${searchQuery}`;
    try {
      const {apiData, error} = await fetchData(url);
      dispatch(setVideosList(apiData['items']));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='relative container'>
      <div>
        <input
          type="text"
          placeholder='Search'
          className='w-4/5 border border-gray-400 rounded-l-full px-2 py-2'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={(e) => {
            setTimeout(() => setShowSuggestions(false), 500);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getSearchedResults();
            }
          }}
        />
        <button className='pt-2.5 pb-3.5 px-4 rounded-r-full border border-gray-400 border-l-0 bg-gray-300'
        onClick={() => getSearchedResults()}>
          <IoIosSearch />
        </button>
      </div>
        {
          showSuggestions ? 
          <ul className='absolute w-4/5 bg-gray-100 shadow-sm rounded-2xl border border-gray-300 py-2 m-2'>

                { 
                  suggestionsList.map(item =>
                    <li key={uuidv4()} 
                    data-searched-list='list-item'
                    className='px-5 py-2 hover:bg-gray-300 flex items-center gap-2 cursor-pointer' onClick={() => {
                      setSearchQuery(item);
                      getSearchedResults();
                    }}><IoIosSearch />{item}</li>
                  )
                }

          </ul>
          : ''
        }
    </div>
  )
}

export default Search