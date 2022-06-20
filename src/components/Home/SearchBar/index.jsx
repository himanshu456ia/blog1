import React from 'react';
import './styles.css';

const SearchBar = ({  value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form >
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;