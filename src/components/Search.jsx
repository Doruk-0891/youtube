import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div>
        <input type="text" placeholder='Search' className='w-96 border border-gray-400 rounded-l-full px-2 py-2'/>
        <button className='pt-2.5 pb-3.5 px-4 rounded-r-full border border-gray-400 border-l-0 bg-gray-300'>
            <IoIosSearch />
        </button>
    </div>
  )
}

export default Search