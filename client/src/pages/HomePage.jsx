import React from 'react';
import '../styles/Homepage.css';
import travelvideo1 from '../styles/travelvideo1.mp4';
import travelvideo2 from '../styles/travelvideo2.mp4';
import travelvideo3 from '../styles/travelvideo3.mp4';
import planetearth from '../styles/planetearth.png';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiGuideFill } from "react-icons/ri";
import Navbar from '../components/Navbar';
import MediaCard from '../components/MediaCard';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage">
        
        <div className="content">
        <div className="header">
          <h1 className="title">Know before you go <img className='titleimg' src={planetearth} alt="titleglobe" /></h1>
          <p className="subtitle">Traveling opens the door to creating memories</p>
          <p className='details'>
              Our Dream Travel provides you with all the information you need to make your trip unforgettable.
              Discover hidden gems, must-see attractions, and essential travel tips. Let's create memories together!
            </p>
        </div>
          {/* <div className="info">
            <p>
              Our travel page provides you with all the information you need to make your trip unforgettable.
              Discover hidden gems, must-see attractions, and essential travel tips. Let's create memories together!
            </p>
          </div> */}
          <div className="media-cards">
            <div className="media-card">
              <img src="https://media.istockphoto.com/id/937253570/photo/tropical-beach-with-palm-trees-pilippine-boats-blue-sky-turquoise-water-and-white-sand.jpg?s=612x612&w=0&k=20&c=WBUAldxoS9A8a0thmQCUtyHtczkcicpHAxO_ZuHJw3I=" alt="" className="media-image" />
            </div>
            <div className="media-card">
                <video className="media-video" src={travelvideo1} autoPlay loop muted></video>
                <video className="media-video" src={travelvideo2} autoPlay loop muted></video>
                <video className="media-video" src={travelvideo3} autoPlay loop muted></video>
            </div>
            <div className="media-card">
              <img src="https://images.unsplash.com/photo-1728042880914-6a5e64896df3?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="media-image" />
            </div>
          </div>
        </div>
      </div>
      <div className='content2'>
        <div>
          <p style={{color:'#a65f90',fontSize:"1.1em"}}>What we serve</p>
          <h1>We offer our best services</h1>
      </div>
      <div>
        <TiWeatherPartlySunny/>
        <p style={{fontSize:"1.1em"}}>Calculate Weather</p>
        <p>we can calculate best time for our travel weather.</p>
      </div>
      <div>
        <RiGuideFill/>
        <p style={{fontSize:"1.1em"}}>Best Tour Guide</p>
        <p>we can choose our best guide person for our tours.</p>
      </div>
      </div>
      <div>
        <div style={{marginLeft: '9.2%'}}>
          <p style={{color:'#d4d258',fontSize:"1.1em"}}>Explore</p>
          <h3>Our Featured Tours</h3>
        </div>
        <div style={{marginLeft: '9.2%', display: 'flex',flexWrap: 'wrap', gap: '5.5%'}}>
          <MediaCard/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;
