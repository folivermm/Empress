import React from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import './Nav.css';

const Nav: React.FC = () => {
    return (
        <Headroom disableInlineStyles>
            <nav className="p-6 flex justify-between items-center h-20 w-full headroom-nav" style={{ backgroundColor: 'rgba(89, 119, 154, 0.5)' }}>
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
    );
}

export default Nav;
