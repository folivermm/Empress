import React from 'react';
import baloo from '../Assets/baloo.jpg';
import Carousel from './Carousel';
import trifold from '../Assets/Gemmys_trifold.jpg';
import syringes from '../Assets/syringes.png';
import syringes2 from '../Assets/syringes-2.png'; // Import the second syringes image
import Nav from '../Nav/Nav';
import Maps from '../Map/Maps';
import gemmy from '../Assets/Gemmys.png';
import gemmyLogo from '../Assets/gemmys-transparent.png';

const Gemmy: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${baloo})` }}>
                <div className="absolute bottom-4 left-4 text-white p-4" style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '2vw' }}>
                    <p>Meet Baloo!
                        <br /> #1 sales representative for Gemmy's.</p>
                    <p>Gemmy's is not for consumption by animals.</p>
                </div>
            </div>
            <div className="w-full h-full">
                <Carousel />
            </div>
            <div className="relative flex justify-center items-center h-full">
                <img
                    src={trifold}
                    alt="Trifold"
                    className="max-w-full max-h-full"
                />
            </div>
            <div className="bg-slate-100 h-20 w-full border-4 border-indigo-300"></div>
            <div className="flex justify-center items-start p-6" style={{ backgroundColor: '#4b5a70' }}>
                <div className="flex items-start space-x-6">
                    <img
                        src={syringes2}
                        alt="Syringes"
                        className="max-w-xs max-h-full p-4"
                        style={{ height: '23rem', width: 'auto' }}
                    />
                    <div className="text-white p-4 max-w-md">
                        <h1 className="text-2xl font-bold">Random Text</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start p-6" style={{ backgroundColor: '#4b5a70' }}>
                <div className="flex items-start space-x-6">
                    <div className="text-white p-4 max-w-md">
                        <h1 className="text-2xl font-bold">Random Text 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.</p>
                    </div>
                    <img
                        src={syringes}
                        alt="Syringes 2"
                        className="max-w-xs max-h-full p-4"
                        style={{ height: '23rem', width: 'auto' }}
                    />
                </div>
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
        </div>
    );
};

export default Gemmy;
