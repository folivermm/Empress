import React from 'react';
import baloo from '../Assets/baloo.jpg'
import Carousel from './Carousel';
import trifold from '../Assets/Gemmys_trifold.jpg';
import syringes from '../Assets/syringes.png';
import Nav from '../Nav/Nav';

const Gemmy: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <Nav />
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${baloo})` }}
            ></div>
            <Carousel />
            <div className="relative flex justify-center items-center h-full bg-cyan-800">
                <img
                    src={trifold}
                    alt="Trifold"
                    className="max-w-full max-h-full"
                />
            </div>
            <div className="bg-slate-100 h-20 w-full border-4 border-indigo-300"></div>
            <div className="flex justify-start bg-cyan-800">
                <img
                    src={syringes}
                    alt="Syringes"
                    className="max-w-xs max-h-full"
                />
            </div>
        </div>
    );
};

export default Gemmy;
