import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BlogItem = ({ blog: { id, title, category, description, authorname, createdat,cover } }) => (
  <div className='blogItem-wrap'>
    <img src={cover} alt="cover" className='blogItem-cover' />
    
    <h3>{title}</h3>
    <p className='blogItem-desc'>{description}</p>

    <footer>
      <div className="blogItem-author">
        <h6>{authorname}</h6>
        <p>{createdat}</p>
      </div>
      <Link className='blogItem-link' to={`/blog/${id}`}>  → </Link>
    </footer>
  </div>
);

export default BlogItem;
