import React from 'react';
import '../css/home.css';
import scrollImage from '../../images/scroll2.png';
import card1 from '../../images/card1.png';
import card2 from '../../images/card2.png' 
import card3 from '../../images/card3.png' 
import Navbar from './navbar';
import Footer from './footer';
import HomePost from './homePost';
import { Link } from 'react-router-dom';


const Home = () => {

  

  return (
    <>
    <Navbar/>
      <div className='outer'>
        <div className="h-img">
          <img src={scrollImage} alt="Scroll Image" />
        </div>

        <div className="h-cards">
        <div className="card ">
            <img src={card1} alt="" />
            <div className='img-content'>
              <p className="card-head">Feed the Need</p>
              <p className='card-text'>Don't waste the food.<br></br>Let's feed the need and help the less <br></br>fortunate among us.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={card2} alt="" />
            <div className='img-content'>
              <p className="card-head">Discover</p>
              <p className='card-text'>Discover local food banks and<br></br>orphanage nearby you.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={card3} alt="" />
            <div className='img-content'>
              <p className="card-head">Change Lives</p>
              <p className='card-text'>Can you imagine a world without hunger? Well its possible if kinder humans like you keep donating. <br></br>Let's begin..!
              </p>
            </div>
          </div>
        </div>

         {/* Link to Posts component */}

          {/* Display latest three posts */}
          <HomePost />
          <div className="linkpost">
            <Link to="/post">View More Posts</Link>
         </div>
      </div>
      
      <Footer/>
    </>
  );
}
export default Home;