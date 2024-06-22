import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import '../css/signup.css';
import rocket from '../../images/rocket.png';
import { NavLink } from 'react-router-dom';
import { auth, provider } from '../pages/config';
import { signInWithPopup } from 'firebase/auth';
import Home from '../pages/home';

const Signup = () => {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
        navigate('/home'); // Redirect to the home page after successful login
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/auth/register', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home'); // Redirect to the home page if already signed in
    }
  }, [navigate]);

  return (
    <>
      {value ? <Home /> :
        <div className="main-container">
          <div className="login-container">
            <div className='left'>
              <h1>Getting Started</h1>
              <p>Looks like you are not with us!</p>
              <p className='login-text'>Create an account for a complete experience</p>
              <form onSubmit={handleSubmit} className='form'>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Sign Up</button>
              </form>
              <div>
                <button onClick={handleClick}>Sign in with Google</button>
              </div>
              <p>Already have an account? <NavLink to={'/'}>Log in</NavLink></p>
            </div>
            <div className="right">
              <img src={rocket} alt="rocket" />
            </div>
          </div>
        </div>}
    </>
  );
};

export default Signup;
