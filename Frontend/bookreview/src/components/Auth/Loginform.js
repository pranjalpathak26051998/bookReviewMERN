import React, { useState } from 'react';
import axios from 'axios';
const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Perform login API call and pass user data to onLogin callback
    try {
      const userData = { email, password }; 
      const response = await axios.post('/login', userData);
      // const data = response.data;
      // console.log(data);
      if (response.status === 200) {
        // Successful login, you can do something with the data or token
        onLogin(response.data); // Assuming data contains token/user information
      } else {
        // Handle login error
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return(
    <div>  
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default LoginForm;
