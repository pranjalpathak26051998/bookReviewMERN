import React from 'react'
import { Router,Route, Routes } from 'react-router-dom';
import '../App.css';
import RegistrationForm from '../components/Auth/RegitrationForm';
const Register = () => {
  return (
    <div className='Register' >
      {/* <RegistrationForm/> */}
      <Routes>
      <Route path="/" element={<RegistrationForm />} />
        <Route path="/Registration" element={<RegistrationForm/>} />
        </Routes>
    </div>
  )
}

export default Register
