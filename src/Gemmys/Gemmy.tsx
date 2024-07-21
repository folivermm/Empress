import React from 'react';
import baloo from '../Assets/baloo.jpg';
import gemmy from '../Assets/Gemmys.png';
import gemmyLogo from '../Assets/gemmys-transparent.png';

import Nav from '../Nav/Nav';
import Maps from '../Map/Maps';
import Footer from '../Footer/Footer'
import ProductRoll from './ProductRoll'
import Dosage from './Dosage'

const Gemmy: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${baloo})` }}>
                <div className="absolute bottom-4 left-4 text-white p-4" style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '2vw' }}>
                    <p>Meet Baloo
                        <br /> #1 sales representative for Gemmy's!</p>
                    <p>Gemmy's is not for consumption by animals.</p>
                </div>
            </div>
            <div >
                <ProductRoll />
                <Dosage />
            </div>
            <div className="relative w-full bg-lime-100 flex items-center border-4" style={{ height: '10rem', borderColor: 'white' }}>
                <img
                    src={gemmyLogo}
                    alt="Gemmy's Logo"
                    className="h-full object-contain ml-16"
                    style={{ transform: 'scale(0.75)' }}
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-center text-5xl font-josefin text-shadow -ml-12">
                    Gemmy's Locations
                </div>
                <img
                    src={gemmy}
                    alt="Gemmy's"
                    className="ml-auto h-full object-contain mr-4"
                />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Maps />
            </div>
            <Footer />
        </div>
    );
};

export default Gemmy;
