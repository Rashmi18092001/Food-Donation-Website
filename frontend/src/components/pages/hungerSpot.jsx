import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirection
import '../css/donate.css';
import Navbar from './navbar';
import Footer from './footer';

const HungerSpot = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
  });

  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/hungerSpot', formData);
      if (response.status === 201) {
        navigate('/post'); // Redirect to posts page
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='donate-box'>
        <p className='d-head'>Find Your Food</p>
        <p className='h-tag'>Enter the details to find your food quickly</p>
        <form className="d-details" onSubmit={handleSubmit}>
          <div className='item'>
            <label>Enter your Name</label>
            <input
              type="text"
              name="name"
              placeholder='Type here'
              className='d-info'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='item'>
            <label>Enter your Address</label>
            <textarea
              name="address"
              cols="10"
              rows="5"
              className='d-info'
              placeholder='Enter your address'
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className='item'>
            <label>Contact Number</label>
            <input
              type="number"
              name="contact"
              placeholder='Type here'
              className='d-info'
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          
          {/* <div className='item'>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder='Type here'
              className='d-info'
              value={formData.quantity}
              onChange={handleChange}
            />
          </div> */}
          
          <div className='d-btn'>
            <button type="submit">Search Food</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default HungerSpot;
