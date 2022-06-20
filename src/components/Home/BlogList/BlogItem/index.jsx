import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const BlogItem = ({blog:{id,
  description,
  title,
  authorName,
  createdAt,
  cover,
  }}) => (
    <div className='blogItem-wrap'>
      <img src={cover} alt="cover" className='blogItem-cover'/>
    
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>

      <footer>
        <div className="blogItem-author">
           <h6>{authorName}</h6>
           <p>{createdAt}</p>
        </div>
      <Link className='blogItem-link' to={`/blog/${id}`}>  → </Link>
      </footer>
    </div>
  );


export default BlogItem