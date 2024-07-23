import React from 'react';
import { Link } from 'react-router-dom';
import './custom.css';
import { ContactUs } from '../ContactUs';
import Nav from '../Nav/Nav';
import Maps from '../Map/Maps';
import VideoRoll from './VideoRoll';
import Footer from '../Footer/Footer';

import empressHome from '../Assets/EmpressHome.png';
import gemmyLogo from '../Assets/Gemmys-Logo.png';
import gemmyTr from '../Assets/GemmysTransparent.png';

import gemmy from '../Assets/Gemmys.png';
import soloStand from '../Assets/solo-stand.jpeg';
import empressTr from '../Assets/empress-transparent.png'
import GemmyRoll from './GemmyRoll';

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <div className="full-screen-bg">
        <img src={empressHome} alt="Empress-Home" />
        <img src={empressTr} alt="Empress" className="overlay2" />
        <div className="text2">
          Award Winning Cannabis Extract Company. Est. 2009.
        </div>
        <img src={gemmyTr} alt="Gemmy's" className="overlay" />
        <div className="text1">
          FECO/RSO
          <br />
          Gemmy's Full Extract Cannabis Oil
        </div>
      </div>
      <div>
        <VideoRoll />
      </div>
      <div className="gemmy-container">
        <GemmyRoll />
      </div>
      <div className="relative w-full bg-lime-100 flex items-center border-4" style={{ height: '10rem', borderColor: 'white' }}>
        <Link to="/Product" style={{ display: 'flex', alignItems: 'center', height: '100%', marginLeft: '5rem' }}>
          <img src={gemmyLogo} alt="Gemmy's Logo" className="h-full object-contain" />
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-center text-5xl font-josefin text-shadow">
          Gemmy's Locations
        </div>
        <img src={gemmy} alt="Gemmy's" className="ml-auto h-full object-contain mr-4" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Maps />
      </div>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#4b5a70' }}>
        <div
          className="w-full bg-cover flex items-center justify-center border-4"
          style={{ height: '10rem', borderColor: '#0EA5E9', backgroundImage: `url(https://www.shutterstock.com/image-vector/seamless-background-angled-white-paper-600nw-2232300125.jpg)` }}
        >
          <div className="text-white text-center text-6xl font-josefin text-shadow">
            Contact
          </div>
        </div>
        <div className="flex flex-1 w-full responsive-container">
          <div className="flex-1 flex items-center justify-center relative p-4 image-container" style={{ paddingTop: '7rem' }}>
            <img src={soloStand} alt="Solo Stand" className="responsive-image" />
          </div>
          <div className="flex-1 flex items-center justify-center p-4 form-container" style={{ paddingTop: '3rem' }}>
            <div className="w-full h-full flex items-center justify-center form-content">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
