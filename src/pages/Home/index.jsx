import React, { useState } from 'react';
import BlogList from '../../components/Home/BlogList';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';
import './styles.css';

const Home = () => {
  const [searchKey, setSearchKey] = useState("");


  const handleClearSearch = () => {
    setSearchKey('');
  };

  return (
    <div>
    <div className='everything'>
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
      
       {/* Footer */}
       <Footer/>
    
    </div>
  );
};

export default Home;