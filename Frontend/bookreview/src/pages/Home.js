import React, { useState } from 'react'
import {Route, Router, Routes} from 'react-router-dom';
// import BookDetail from '../components/Books/BookDetail';
import AddBook from './AddBook';
import Login from './Login';
import Register from './Register';
import '../App.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const [home, sethome] = useState('Home');
  const [login, setlogin] = useState('Login');
  const [register, setregister] = useState('Register')
  const [addbook, setaddbook]=useState('AddBook')
  function onClickLogin() {
     setlogin(Login)
    //  sethome();
    //  setregister();
  }
  function onClickRegister() {
    setregister(Register)
    // setlogin();
    // sethome();
  }
function onClickAddBook(){
  setaddbook(AddBook)
}
  
  return (
    <div className='HomeBody' >
      <nav>
        <div className="container-fluid">
          <form className="navbar"  >
            <ul className='left-side' >
              <><a >{home}</a></>&nbsp;&nbsp;
              <><a>{login}</a></>&nbsp;&nbsp;
              <><a >{register}</a></>
            </ul>
            <div className='right-side'>
              <input className='search-input' type="search" placeholder="Search" aria-label="Search" />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </nav>
      <div className='bookReviewFrontPage'>
        <th>Book Review Library</th>
        <Link to='/Login'><button onClick={onClickLogin} >{login}</button></Link>
        <Link to='/Register'><button onClick={onClickRegister} >{register}</button></Link>
        <Link to='/AddBook'><button onClick={onClickAddBook} >{addbook}</button></Link>
      </div>
      
    </div>
  )
}

export default Home
