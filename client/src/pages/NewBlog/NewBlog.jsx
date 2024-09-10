import React, { useState } from 'react';
import './NewBlog.css';  // Optional: Add your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const NewBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    authorname: '',
    createdat: '',
    imagelink: '',
    description: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const history = useHistory();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Log formData to check if all fields are populated
    console.log('Form Data before submission:', formData);
  
    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (!response.ok) {
          return response.text().then((text) => {
            console.error('Error response:', text);
            throw new Error('Network response was not ok');
          });
        }
  
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        console.log('Form successfully submitted:', data);
        setFormData({
          title: '',
          category: '',
          authorname: '',
          createdat: '',
          imagelink: '',
          description: '',
        });
      }).then(() => {
        // Redirect to the home page on successful form submission
        history.push('/');  // Navigate to the home page
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };
  
  
  
  return (
    <form onSubmit={handleSubmit} className='blog-form'>
      <h2>CSS Form</h2>
      
       {/* title */}
      <div className="textarea-area title">
          <label htmlFor="message">Title</label>
          <input
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleInputChange}
          />
        </div>


      <div className="large-group">

        <div className="small-group">
          <label htmlFor="category">Category</label>
          <input 
            id="category" 
            type="text" 
            name="category" 
            value={formData.category} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="small-group">
          <label htmlFor="authorname">Author Name</label>
          <input 
            id="authorname" 
            type="text" 
            name="authorname" 
            value={formData.authorname} 
            onChange={handleInputChange} 
          />
        </div>



        <div className="small-group">
          <label htmlFor="createdat">Date of post</label>
          <input 
            id="createdat" 
            type="text" 
            name="createdat" 
            value={formData.createdat} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="small-group">
          <label htmlFor="imagelink">Image Link</label>
          <input 
            id="imagelink" 
            type="text" 
            name="imagelink" 
            value={formData.imagelink} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="textarea-div">
          <label htmlFor="description">Description</label>
          <textarea 
            id="description" 
            name="description" 
            value={formData.description} 
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input 
          id="submit" 
          className="blog-btn" 
          type="submit" 
          value="Submit" 
        />

      </div>
    </form>
  );
};

export default NewBlog;
