import React from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import './Nav.css';

const Nav: React.FC = () => {
    return (
        <Headroom disableInlineStyles>
            <nav className="p-6 flex justify-between items-center h-20 w-full headroom-nav">
                <div className="flex-1 flex justify-center pl-4">
                    <Link to="/" className="text-3xl font-bold text-white font-josefin italic text-shadow whitespace-nowrap">
                        EMPRESS EXTRACTS
                    </Link>
                </div>
                <div className="flex-1 flex justify-end space-x-6 pr-20">
                    <Link to="/About" className="text-2xl text-white font-josefin italic text-shadow">About</Link>
                    <Link to="/Product" className="text-2xl text-white font-josefin italic text-shadow">Product</Link>
                    <Link to="/Education" className="text-2xl text-white font-josefin italic text-shadow">Education</Link>
                    <Link to="/Contact" className="text-2xl text-white font-josefin italic text-shadow">Contact</Link>
                </div>
            </nav>
        </Headroom>
    );
}

export default Nav;
