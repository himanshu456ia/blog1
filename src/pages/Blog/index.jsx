import React, { useState } from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';

const Blog = () => {
  const{id}=useParams();
  const[blog,setBlog]= useState(null)

  useEffect(()=> {
    let blog=blogList.find(blog=>blog.id=== parseInt(id));

    if(blog){
      setBlog(blog);
    }
  },[])
  return (
    <div>
        {
          blog ? <div className="blog-wrap">
            <header>
              <p className="blog-date">
                Published {blog.createdAt}
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