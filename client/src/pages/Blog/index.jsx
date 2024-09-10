import React, { useState } from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';

const Blog = () => {
  const{id}=useParams();
  const[blog,setBlog]= useState(null)

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
        const selectedBlog = data.find((blog) => blog.id === parseInt(id));
        if (selectedBlog) {
          setBlog(selectedBlog);
        } else {
          console.log('Blog not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        {
          blog ? <div className="blog-wrap">
            <header>
              <p className="blog-date">
                Published {blog.createdat}
              </p>
              <h1>{blog.title}</h1>
            </header>

            <img className='img-back' src={blog.cover} alt="cover" />
            <p className='blog-desc'>{blog.description}</p>
          </div>:<EmptyList/>
        }
    </div>
  );
};

export default Blog