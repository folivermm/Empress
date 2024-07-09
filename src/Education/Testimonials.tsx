import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import trifold from '../Assets/Gemmys_trifold.jpg';
import '../Nav/Nav.css'
import Nav from '../Nav/Nav'
const Testimonials: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <Nav />
            <div className="relative flex justify-center items-center h-full bg-cyan-800">
                <img
                    src={trifold}
                    alt="Trifold"
                    className="max-w-full max-h-full"
                />
            </div>
        </div>
    );
};

export default Testimonials;
