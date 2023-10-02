// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import axios from './axiosConfig';
import { useDispatch } from 'react-redux';
import { login } from './store/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      const response = await axios.post('/auth/login', { username, password }); 
      
      dispatch(login({
        username,
        token: response?.data?.token,
      }));
      
      if(response?.data?.token){
        localStorage.setItem('token', response.data.token);
      }

      history('/home'); // Use history.push to navigate
    }
    catch(error){
      console.log(error);
      alert('Login failed. Invalid credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
