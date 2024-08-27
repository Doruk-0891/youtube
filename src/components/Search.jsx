import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_SUGGESTIONS_API_URL } from '../utils/constants';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestionsList, setSuggestionsList] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
  const getSuggestions = async () => {
    const url = `${YOUTUBE_SUGGESTIONS_API_URL}${searchQuery}`;
    try {
      const apiResponse = await fetch(url);
      const jsonData = await apiResponse.json();
      setSuggestionsList(jsonData[1]);
      
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
        />
        <button className='pt-2.5 pb-3.5 px-4 rounded-r-full border border-gray-400 border-l-0 bg-gray-300'>
            <IoIosSearch />
        </button>
      </div>
      <ul className='absolute w-4/5 bg-gray-100 shadow-sm rounded-2xl border border-gray-300 py-2 m-2'>
      {
        suggestionsList.map(item => 
          <li className='px-5 py-2 hover:bg-gray-300 flex items-center gap-2 cursor-pointer'><IoIosSearch />{item}</li>

        )
      }

      </ul>
    </div>
  )
}

export default Search