import React from 'react'
import '../App.css';
import BookDetail from '../components/Books/BookDetail';
//Book details has to be added here
const AddBook = () => {
  function handleBook(userData){
    console.log(userData)
    document.write(" fetched data from Bookdetails", userData)
  }
  return (
    <div className='AddBook' >
      <h1>Book Details</h1>
      <BookDetail onBook={handleBook} />
      <p>page under construction</p>
    </div>
  )
}
export default AddBook
