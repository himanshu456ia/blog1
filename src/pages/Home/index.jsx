import React, { useState } from 'react';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  const [searchKey, setSearchKey] = useState("");


  const handleClearSearch = () => {
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List  */}
       <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;