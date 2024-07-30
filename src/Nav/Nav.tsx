import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import './Nav.css';
import hamburger from '../Assets/white-mob.png';

const Nav: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Headroom disableInlineStyles>
            <nav className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="nav-brand">
                        EMPRESS EXTRACTS
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/About" className="nav-link">About</Link>
                    <Link to="/Product" className="nav-link">Product</Link>
                    <Link to="/Education" className="nav-link">Education</Link>
                    <Link to="/Contact" className="nav-link">Contact</Link>
                </div>
                <div className="nav-hamburger">
                    <img src={hamburger} alt="hamburger_menu" className="hamburger-icon" onClick={() => setShowMenu(!showMenu)} />
                </div>
            </nav>
            {showMenu && (
                <div className="nav-menu">
                    <Link to="/About" className="nav-menu-link" onClick={() => setShowMenu(false)}>About</Link>
                    <Link to="/Product" className="nav-menu-link" onClick={() => setShowMenu(false)}>Product</Link>
                    <Link to="/Education" className="nav-menu-link" onClick={() => setShowMenu(false)}>Education</Link>
                    <Link to="/Contact" className="nav-menu-link" onClick={() => setShowMenu(false)}>Contact</Link>
                </div>
            )}
        </Headroom>
    );
}

export default Nav;
