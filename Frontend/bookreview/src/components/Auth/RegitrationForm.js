import React, { useState } from 'react';
import '../../App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// title, name, phone, email,password, address } = req.body;
const RegitrationForm = ({onRegister}) => {
  const [firstname,setfirstname]=useState();
  const [middlename,setmiddlename]=useState();
  const [lastname,setlastname]=useState();
  const [email,setemail]=useState();
  const [password, setpassword]=useState();
  const [mobile, setmobile]=useState();
  const [age, setage]=useState();

  const handleRegistration=()=>{
// set api for the registration of the new user or author
    const userData={firstname,lastname,email,password,mobile}
    
    onRegister(userData);
  }
  return (
    <div className='RegisterAuthor' >
         <th>Register Author</th>
        
          <input type='text' placeholder='Mr/Mrs/"Miss'/> 
      Enter FirstName:  <input type='text' value={firstname} placeholder='FirstName' />
      Enter MiddleName:  <input type='text' placeholder='MiddleName' />
      Enter LastName:  <input type='text' placeholder='LastName' />
      Enter email:  <input type='text' placeholder='emailId' />
      Enter password:  <input type='password' placeholder='password' />
      <button  onClick={handleRegistration}>Submit</button>
      <button>Reset</button>
      
    </div>
    
   
  )
}

export default RegitrationForm
