import React from 'react';
import LoginForm from '../components/Auth/Loginform';
import '../App.css';
const Login = () => {
  const handleLogin = (userData) => {
    // Implement the logic to send the user data to the server for authentication
    console.log('Logging in with user data:', userData);
  };

  return (
    <div className='Login' >
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
