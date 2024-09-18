import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <label htmlFor="search-input" className='sr-only'>Search</label>
        <input 
        type="search"
        id='search-input'
        className='search-input'
        placeholder='Search employees..'
        required />
    </div>
  )
}

export default SearchBar