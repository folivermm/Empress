import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import trifold from '../Assets/Gemmys_trifold.jpg';
import syringes from '../Assets/syringes.png';

const Education: React.FC = () => {
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

export default Education;
