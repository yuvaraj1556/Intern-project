import React from 'react'

const SearchItem = ({Search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Enter Item to Search</label>
        <input
            autoFocus
            id = 'search'
            type = 'text'
            role='search'
            value = {Search}
            onChange = {(e) => setSearch(e.target.value)}
            aria-label='search-box'
            placeholder='Search Items'
            required
        />
    </form>
  )
}

export default SearchItem