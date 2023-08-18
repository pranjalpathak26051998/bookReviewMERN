import React, { useState } from 'react';
import axios from 'axios'
import '../../App.css';
//routes.post("/books", createBook)--->creating books
// {title,excerpt,userId,ISBN,category,subcategory,releasedAt}=req.body
const BookDetail = ({ onBook }) => {

  const [title, settitle] = useState('');
  const [excerpt, setexcerpt] = useState('');
  const [userId, setuserId] = useState('');
  const [ISBN, setISBN] = useState('');
  const [category, setcategory] = useState('');
  const handleBook = async () => {
    try {
      const userData = { title, excerpt, userId, ISBN, category };
      const response = await axios.post('/books', userData);

      if (response.status === 200) {
        // Successful book creation
        onBook(response.data);
      } else {
        console.error('Book creation failed:', response.data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Alert user about the error
      alert('An error occurred while creating the book.');
    };
  }

  return (
    <div className='BookDetail'>
      <input type='text' placeholder='title' value={title} onChange={(e) => settitle(e.target.value)} />
      <input type='text' placeholder='excerpt' value={excerpt} onChange={(e) => setexcerpt(e.target.value)} />
      <input type='text' placeholder='userId' value={userId} onChange={(e) => setuserId(e.target.value
      )} />
      <input type='text' placeholder='ISBN' value={ISBN} onChange={(e) => setISBN(e.target.value)} />
      <input type='text' placeholder='category' value={category} onChange={(e) => setcategory(e.target.value)} />
      <button onClick={handleBook}>Book</button>
    </div>
  )
}
export default BookDetail


