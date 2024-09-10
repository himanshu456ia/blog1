import React from 'react';
import './styles.css';

const SearchBar = ({ value, handleSearchKey, clearSearch, handleSubmit }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button type="submit">Go</button>
    </form>
  </div>
);

export default SearchBar;
