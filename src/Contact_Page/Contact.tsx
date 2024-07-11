import React from 'react';
import farm from '../Assets/contact-farm.png';
import '../Nav/Nav.css';
import Nav from '../Nav/Nav'
import { ContactUs } from '../ContactUs';
import heartsG from '../Assets/green-hearts.jpg';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#4b5a70' }}>
            <Nav />
            <div
                className="w-full bg-cover flex items-center justify-center border-4 "
                style={{ height: '10rem', borderColor: '#4b5a70', backgroundImage: `url(${heartsG})` }}
            >
                <div className=" text-center text-7xl font-josefin text-shadow" style={{ color: '#cbdaaa' }} >
                    Contact
                </div>
            </div>
            <div className="relative w-full h-screen bg-opacity-50 flex items-center">
                <div className="relative flex-1 h-full flex items-center justify-center">
                    <div className="absolute left-0 p-12 rounded shadow-lg w-full" style={{ zIndex: 1, maxWidth: '90%', marginLeft: '2rem' }}>
                        <ContactUs />
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
