import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import filterSlice from '../Filter/filterSlice'
const Input = () => {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  const handleSearchTextChange = (e) => {
    dispatch(filterSlice.actions.searchFilterChange(e.target.value))
    setSearchText(e.target.value)

  }
  return (
<form className='mx-auto mb-5'>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <AiOutlineSearch />
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required 
        value={searchText}
        onChange={handleSearchTextChange}
        />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>Search</button>
    </div>
</form>
  )
}

export default Input