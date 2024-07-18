import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { ContactUs } from '../ContactUs';
import Nav from '../Nav/Nav'
import ImgRoll from './ImgRoll'
import Footer from '../Footer/Footer'


import coverHome from '../Assets/three.jpg.jpg';
import emily from '../Assets/page_16.png';
import gemmyLogo from '../Assets/Gemmys-Logo.png'
import award from '../Assets/awards.png'
import gemmy from '../Assets/Gemmys.png'
import gemmyMain from '../Assets/gemmys-white.png'
import empressOpac from '../Assets/empress-transparent.png'
import OakEquity from '../Assets/Equity.png'
const About: React.FC = () => {
    return (
        <div>
            <Nav />
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${coverHome})`, backgroundPosition: 'top' }}
            ></div>
            <div
                className="absolute left-8 top-32 md:left-24 md:top-32 w-[90%] md:w-[85%] bg-black bg-opacity-90 p-4 z-9 custom-bg-blue"
                style={{ paddingLeft: '12rem' }}
            >
                <p className="text-white responsive-text">
                    Emilly...
                    <br /><br />
                    The Heart...
                </p>
            </div>
            <img
                src={emily}
                alt="emily"
                className="absolute left-8 top-28 md:left-14 md:top-28 custom-emily"
            />
            <div className="bottom-left">
                <img
                    src={OakEquity}
                    alt="Oakland Equity"
                    className="w-1/3 md:w-1/6 p-2"
                />
                <img
                    src={gemmyMain}
                    alt="Gemmy's Logo"
                    className="w-1/3 md:w-1/6 p-2"
                />
                <img
                    src={empressOpac}
                    alt="Empress Logo"
                    className="w-1/3 md:w-1/12 p-2"
                />
            </div>
            <div className="smaller-container">
                <div className="features-title">Featured in Magazines and Publications. Click Below...</div>
                <div className="features-content">
                    <div className="feature-item">
                        <a href="https://issuu.com/dopemag/docs/dope_mag_norcal_web_august" target="_blank" className="underline">DOPE -</a> Aug 2016 p. 90-93
                    </div>
                    <div className="feature-item">
                        <a href="https://cannabisnow.com/year-globs-best-dabs-2017/7" target="_blank" className="underline">Cannabis Now -</a> The Best Dabs of 2017
                    </div>
                </div>
                <div className="features-content">
                    <div className="feature-item">
                        <a href="https://archive.hightimes.com/article/2018/11/1/100-women-is-high-places" target="_blank" className="underline">High Times -</a> 2018 High Times 100 Women in High Place
                    </div>
                    <div className="feature-item">
                        <a href="https://issuu.com/nwleaf/docs/californialeaf_july2021" target="_blank" className="underline">Leaf Nation -</a> July 2021 p.16
                    </div>
                </div>
                <div className="feature-item">
                    <a href="https://www.edrosenthal.com/edrosenthalstore/marijuana-harvest-maximizing-quality-yield-in-your-cannabis-garden" target="_blank" className="underline">"Marijuana Harvest"</a> by Ed Rosenthal
                </div>
            </div>



            <div
                className="w-full bg-cover flex items-center justify-center border-4 border-black"
                style={{ height: '8rem', backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/05/43/37/82/1000_F_543378228_geBD4iXXM47ixrsXVZmWb74ZfYVMgQ3j.jpg)` }}
            >
                <div className="text-white text-center text-5xl font-josefin text-shadow">
                    Empress Awards
                </div>
            </div>
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${award})`, backgroundPosition: 'bottom' }}
            >
                <div className="absolute inset-0 flex items-start justify-center bg-black bg-opacity-50 pt-7">
                    <p className="text-white text-center text-2xl font-josefin award-text">
                        2016 4/20 First Place Best Wax<br />
                        2016 4/20 Connoisseurs Choice of Concentrate<br />
                        2016 Halloweed Cup: Best Booth<br />
                        2016 Halloweed Cup: First and Second Place, Best Wax<br />
                        2016 Cup FINALS Championship: First Place, Best Wax<br />
                        2017 4/20 Best Booth<br />
                        2017 4/20 Third Place Best Wax<br />
                        2017 Halloweed Cup: First Place, Best wax<br />
                        2017 Halloweed Cup: Connoisseurs Choice of Concentrate<br />
                        2017 Cup Finals Championship: First Place, Best Wax
                    </p>
                </div>
            </div>
            <div
                className="w-full bg-cover border-4"
                style={{
                    height: '25rem',
                    borderColor: '#107869',
                    backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/05/43/37/82/1000_F_543378228_geBD4iXXM47ixrsXVZmWb74ZfYVMgQ3j.jpg)`
                }}
            >
                <ImgRoll />
            </div>
            <Footer />
        </div>
    )
}

export default About
