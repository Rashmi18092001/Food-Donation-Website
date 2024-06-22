import React from 'react';
import '../css/footer.css';
import logo from '../../images/logo-foot.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return<>
    <div className="f-outer">
        <div className="f-menus">
            <div className="f-logo">
                <div className="menu-logo">
                    <img src={logo}></img>
                </div>
                <p className='foot-tag'>Nourish lives Bite by Bite</p>
            </div>
            <div className="menu">
                <div className="m-item">
                    <ul>
                        <li>www.megabite.com</li>
                        <li>+91 7541259882</li>
                        <li>megabite@gmail.com</li>
                    </ul>
                </div>
                
                <div className="m-item">
                    <ul>
                        <li>Blogs</li>
                        <li>News</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="m-item">
                    <ul>
                    <li><NavLink to={'/donate'}>Donate</NavLink></li>
                    <li><NavLink to={'./hunger-spot'}>Hunger Spot</NavLink></li>
                    <li><NavLink to={'./login'}>Login</NavLink></li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div className='line'></div>
        <div className="f-links">
            <div className='link'>
                <div className="icon"><i class="ri-facebook-box-fill"></i></div>
                <div className="icon"><i class="ri-threads-line"></i></div>
                <div className="icon"><i class="ri-instagram-fill"></i></div>
                <div className="icon"><i class="ri-twitter-x-line"></i></div>
                <div className="icon"><i class="ri-google-fill"></i></div>
            </div>
            <div className="copy">
                <p> © Copyright. All Rights Reserved.</p>
            </div>
            
        </div>
    </div>
  </>
}

export default Footer;