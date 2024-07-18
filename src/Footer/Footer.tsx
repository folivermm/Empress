import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import insta from '../Assets/instagram.png';
import gemmy from '../Assets/Gemmys-Logo.png';
import empress from '../Assets/Empress-Purple.png';

export default function Footer() {
    return (
        <footer className="footer w-full bg-gray-800">
            <div className="footer-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" className="footer-icon footer-icon-insta" />
                </a>
                <Link to="/gemmys">
                    <img src={gemmy} alt="Gemmy's Logo" className="footer-icon" />
                </Link>
                <Link to="/">
                    <img src={empress} alt="Empress Logo" className="footer-icon footer-icon-empress" />
                </Link>
            </div>
            <div className="footer-text">
                Empress Extracts &copy; 2024. All Rights Reserved.
            </div>
        </footer>
    );
}
