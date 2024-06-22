import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import { useState } from 'react';
import logo from '../../images/logo-head.png';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Clear localStorage or perform any other logout operations
    localStorage.clear();
    // Redirect to the sign-in page
    navigate('/');
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to={'/'} className='title'>
          <div className="menu-logo">
            <img src={logo} alt="Logo"></img>
          </div>
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <NavLink to={'/donate'}>Donate</NavLink>
          </li>
          <li>
            <NavLink to={'/hunger-spot'}>Hunger Spot</NavLink>
          </li>
          <li>
            <NavLink to={'/bookings'}>Bookings</NavLink>
          </li>
          <li>
          <button onClick={logout} className="hoverb">Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
