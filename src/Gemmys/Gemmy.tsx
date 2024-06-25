import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import ballo from '../Assets/baloo.jpg'
import Carousel from './Carousel';

const Gemmy: React.FC = () => {
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
                style={{ backgroundImage: `url(${ballo})` }}
            ></div>
            <Carousel />
        </div>
    );
};

export default Gemmy;
