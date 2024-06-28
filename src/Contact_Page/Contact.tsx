import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import farm from '../Assets/contact-farm.png';
import '../Nav.css';
import { ContactUs } from '../ContactUs';
import heartsG from '../Assets/green-hearts.jpg';

const Contact: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <Headroom disableInlineStyles>
                <nav className="bg-blue-300 bg-opacity-50 p-6 flex justify-between items-center h-20 w-full headroom-nav">
                    <div className="flex-1 flex justify-start pl-16">
                        <Link to="/" className="text-3xl font-bold text-white font-josefin italic text-shadow">
                            EMPRESS EXTRACTS
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-end space-x-6 pr-20">
                        <Link to="/Gemmys" className="text-lg text-white font-josefin font-light italic text-shadow">Gemmy's</Link>
                        <Link to="/Testimonials" className="text-lg text-white font-josefin font-light italic text-shadow">Testimonials</Link>
                        <Link to="/Contact" className="text-lg text-white font-josefin font-light italic text-shadow">Contact</Link>
                    </div>
                </nav>
            </Headroom>
            <div
                className="w-full bg-cover flex items-center justify-center border-4"
                style={{ height: '10rem', borderColor: '#CFFAFE', backgroundImage: `url(${heartsG})` }}
            >
                <div className="text-cyan-100 text-center text-6xl font-josefin text-shadow">
                    Contact
                </div>
            </div>
            <div className="relative w-full h-screen bg-blue-400 bg-opacity-50 flex items-center">
                <div className="relative flex-1 h-full flex items-center justify-center">
                    <div className="absolute left-0 p-12 rounded shadow-lg w-full" style={{ zIndex: 1, maxWidth: '90%', marginLeft: '2rem' }}>
                        <ContactUs className="bg-opacity-50" />
                    </div>
                    <img
                        src={farm}
                        alt="contact-farm"
                        className="absolute right-0 h-full object-cover"
                        style={{ zIndex: 0 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
