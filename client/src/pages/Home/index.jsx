import React, { useState, useEffect } from 'react';
import BlogList from '../../components/Home/BlogList';
import Footer from '../../components/Home/Footer';
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blog, setBlog] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Fetching blogs on component mount
  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched blogs:", data);   
        setBlog(data);
        setFilteredBlogs(data);  // Initially set filteredBlogs to all blogs
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handling search input
  const handleSearchKey = (e) => {
    setSearchTerm(e.target.value);
   
  };

  // Clearing the search
  const clearSearch = () => {
    setSearchTerm('');
    console.log(searchTerm);
    setFilteredBlogs(blog);  // Reset to show all blogs
  };

  // Filtering blogs based on category
  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = blog.filter(b =>
      b.category.toLowerCase() === searchTerm.toLowerCase()
    );
    setFilteredBlogs(filtered);
 
  };

  return (
    <div>
      <SearchBar
        value={searchTerm}
        clearSearch={clearSearch}
        handleSearchKey={handleSearchKey}
        handleSubmit={handleSubmit}
      />
      <BlogList blogs={filteredBlogs} />  {/* Use filteredBlogs for rendering */}
      <Footer />
    </div>
  );
};

export default Home;
