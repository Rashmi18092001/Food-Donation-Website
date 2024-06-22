import React from 'react';
import '../css/donate.css'
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios' //used for making HTTP requests
import {useState,useEffect} from 'react'

const Donate = () => {

    const[items,setItems]=useState([]);
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[contact,setContact]=useState('')
    const[foodDesc,setFoodDesc]=useState('')
    const[quantity,setQuantity]=useState('')
    const[foodTime,setFoodTime]=useState('')
    const[editingId,setEditingId]=useState(null)

    useEffect(()=>{
      datafetch()
    }, []);

    // show items
    const datafetch= async()=>{
      try{
          const response =  await axios.get('http://localhost:8082/api/donate') //show items
          setItems(response.data)
      }catch(err){
        console.log(err)
      }
    }

    // creating posts

    const addingdata = async (e) => {
      e.preventDefault();
      try {
          if (!editingId) {
              const response = await axios.post('http://localhost:8082/api/donate', { name, address, contact, foodDesc, quantity, foodTime });
              console.log("Item added:", response.data);
          } else {
              const response = await axios.put(`http://localhost:8082/api/donate/${editingId}`, { name, address, contact, foodDesc, quantity, foodTime });
              console.log("Item updated:", response.data);
              setEditingId(null);
          }
          datafetch();
          setName('');
          setAddress('');
          setContact('');
          setFoodDesc('');
          setQuantity('');
          setFoodTime('');
      } catch (err) {
          console.log(err);
      }
  };

 
         
  return <>
  <Navbar/>
    <div className='donate-box'>
      <p className='d-head'>Donation Details</p>

      <form onSubmit={addingdata} className="d-details">
        <div className='item'>
          <label>Enter your Name</label>
          <input type="text" placeholder='Type here' value={name} onChange={(e) => { setName(e.target.value) }} className='d-info'/>
        </div>
        
        <div className='item'>
          <label>Enter your Address</label>
          <textarea name="" id="" cols="10" rows="5" className='d-info' value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='Enter your address'></textarea>
        </div>
        
        <div className='item'>
          <label>Contact Number</label>
          <input type="number" value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder='Type here' className='d-info'/>
        </div>

        

        <div className='item'>
          <label>Food Item Description</label>
          <input type="text" value={foodDesc} onChange={(e) => { setFoodDesc(e.target.value) }} placeholder='Rice, Roti, Chicken, etc..' className='d-info'/>
        </div>

        <div className='item'>
          <label>Total Quantity</label>
          <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} placeholder='No. of servings' className='d-info'/>
        </div>

        
         <div className='item'>
          <label>Prepared Food Time</label>
          <input type="time" value={foodTime} onChange={(e) => { console.log(e.target.value); setFoodTime(e.target.value); }} placeholder='Type here' className='d-info'/>
        </div>

        <div className='d-btn'>
        <button>{editingId ? 'Update Donation' : 'Add Donation'}</button>
        </div>
      </form>
    </div>

    
    <Footer/>
  </>
}

export default Donate;