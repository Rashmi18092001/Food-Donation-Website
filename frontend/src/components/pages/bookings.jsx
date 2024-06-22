// Bookings.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './navbar';
import Footer from './footer';
import { useState, useEffect } from "react";
import axios from "axios";
import '../css/booking.css'
function Bookings() {
    


// function Bookings() {
    
    const bookings = useSelector(state => state); // Assuming your state is stored as an array

    

    return (
            <>
                <Navbar />
                <div className='book-card'>
                <h2>Your Bookings</h2>
                <div className="book-container">
                    {bookings.map((booking) => (
                        <div className="user-detail" key={booking.id}> {/* Assuming booking has an id */}
                            <h5>Name : {booking.name}</h5>
                            <p>Location : {booking.address}</p>
                            <p>Food Items : {booking.foodDesc}</p>
                            <p>Quantity : {booking.quantity}</p>
                            <p>Prepared Food Time : {booking.foodTime}</p>
                        </div>
                    ))}
                </div>
                </div>
                <Footer />
            </>
        );
        
       
    
    
}

export default Bookings;

