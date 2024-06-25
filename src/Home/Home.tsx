import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import '../custom.css';
import { ContactUs } from './ContactUs';

import coverHome from '../Assets/three.jpg.jpg';
import emily from '../Assets/page_16.png';
import gemmyLogo from '../Assets/Gemmys-Logo.png'
import award from '../Assets/awards.png'
import gemmy from '../Assets/Gemmys.png'

const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Headroom>
        <nav className="bg-blue-300 bg-opacity-50 p-6 flex justify-between items-center h-20 w-full">
          <div className="flex-1 flex justify-start pl-16">
            <Link to="/" className="text-3xl font-bold text-white font-josefin italic text-shadow">
              EMPRESS EXTRACTS
            </Link>
          </div>
          <div className="flex-1 flex justify-end space-x-6 pr-20">
            <Link to="/Gemmys" className="text-lg text-white font-josefin font-light italic text-shadow">Gemmy's</Link>
            <Link to="/Education/Testimonials" className="text-lg text-white font-josefin font-light italic text-shadow">Education/Testimonials</Link>
            <Link to="/Contact" className="text-lg text-white font-josefin font-light italic text-shadow">Contact</Link>
          </div>
        </nav>
      </Headroom>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${coverHome})`, backgroundPosition: 'top' }}
      ></div>
      <div
        className="absolute left-8 top-32 md:left-24 md:top-32 w-[90%] md:w-[85%] bg-black bg-opacity-90 p-4 z-9 custom-bg-blue"
        style={{ paddingLeft: '12rem' }}
      >
        <p className="text-white responsive-text">
          Emily Scarbrough is a fifth generation Bay Area native that has been involved in the Medical Cannabis industry in the greater Bay Area since 2009. Emily is a mother and an award winning extract artist who founded Empress Extracts and Gemmy’s. Emily AKA Empress has large scale cultivation experience, brand building, networking and distribution experience along with a passion for the medicinal values of cannabis. Not only have her products brought in many awards in the past but Empress is currently working with the social network and focused on helping patients or people in the cannabis industry.
          <br /><br />
          The heart of Empress Extracts is Gemmy’s RSO, which is a compassionate, holistic and medicinal product that has multiple first hand stories of various types of medical success. Gemmy’s RSO has brought Empress Extracts together with multiple organizations such as Operation EVAC, The Munchie Movement (which helps to feed the homeless), Compassion programs as well as other educational and support classes regarding cannabis and cancer. The mission of Emily and Empress Extracts is to provide compassionate and quality cannabis products to this amazing community while educating and supporting those in need.
        </p>
      </div>
      <img
        src={emily}
        alt="emily"
        className="absolute left-8 top-28 md:left-14 md:top-28 custom-emily"
      />
      <div
        className="w-full bg-cover flex items-center justify-center border-4 border-black"
        style={{ height: '8rem', backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/05/43/37/82/1000_F_543378228_geBD4iXXM47ixrsXVZmWb74ZfYVMgQ3j.jpg)` }}
      >
        <div className="text-white text-center text-5xl font-josefin text-shadow">
          Empress Awards
        </div>
      </div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${award})`, backgroundPosition: 'bottom' }}
      >
        <div className="absolute inset-0 flex items-start justify-center bg-black bg-opacity-50 pt-10">
          <p className="text-white text-center text-2xl font-josefin leading-loose">
            2016 4/20 First Place Best Wax<br />
            2016 4/20 Connoisseurs Choice of Concentrate<br />
            2016 Halloweed Cup: Best Booth<br />
            2016 Halloweed Cup: First and Second Place, Best Wax<br />
            2016 Cup FINALS Championship: First Place, Best Wax<br />
            2017 4/20 Best Booth<br />
            2017 4/20 Third Place Best Wax<br />
            2017 Halloweed Cup: First Place, Best wax<br />
            2017 Halloweed Cup: Connoisseurs Choice of Concentrate<br />
            2017 Cup Finals Championship: First Place, Best Wax
          </p>
        </div>
      </div>
      <div
        className="w-full bg-cover border-4"
        style={{ height: '8rem', borderColor: '#107869', backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/05/43/37/82/1000_F_543378228_geBD4iXXM47ixrsXVZmWb74ZfYVMgQ3j.jpg)` }}
      ></div>
      <div className="relative w-full bg-lime-100 flex items-center border-4" style={{ height: '10rem', borderColor: 'white' }}>
        <img
          src={gemmyLogo}
          alt="Gemmy's Logo"
          className="h-full object-contain ml-40"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-center text-5xl font-josefin text-shadow">
          Gemmy's Locations
        </div>
        <img
          src={gemmy}
          alt="Gemmy's"
          className="ml-auto h-full object-contain mr-4"
        />
      </div>
      <div
        className="w-full bg-cover flex items-center justify-center border-4"
        style={{ height: '8rem', borderColor: '#0EA5E9', backgroundImage: `url(https://www.shutterstock.com/image-vector/seamless-background-angled-white-paper-600nw-2232300125.jpg)` }}
      >
        <div className="text-white text-center text-5xl font-josefin text-shadow">
          Contact
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
