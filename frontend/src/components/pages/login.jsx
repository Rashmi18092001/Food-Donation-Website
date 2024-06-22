import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import logo from "../../images/logo-head.png";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="login-container">
          <div className="left-part signup-left">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="right-part signup-right">
            <p>Log in</p>
            <form onSubmit={handleSubmit} className="logform">
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
              <button type="submit" className="btn">
                Log in
              </button>
            </form>

            <p>
              Don't have an account? <NavLink to={"/signup"}>Sign up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
