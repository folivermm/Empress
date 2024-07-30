import React from 'react';
import './About.css';
import Nav from '../Nav/Nav'
import ImgRoll from './ImgRoll'
import AwardRoll from './AwardRoll'
import Footer from '../Footer/Footer'


import coverHome from '../Assets/three.jpg.jpg';
import emily from '../Assets/page_16.png';
import award from '../Assets/awards.png'
import gemmyMain from '../Assets/gemmys-white.png'
import empressOpac from '../Assets/empress-transparent.png'
import OakEquity from '../Assets/rsz_1equityoak.png'

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
                <div className="responsive-text text-white">
                    <p>
                        CEO and founder Emily Scarbrough created Empress Extracts in 2009. Empress Extracts is a legacy-operated, award-winning cannabis extraction company and has since been servicing the California medical cannabis market. The company has been producing a diverse, yet focused, array of medicinal cannabinoid extracts for the patients of the San Francisco Bay Area and beyond. Empress has a simple goal; to build a business around the extraction and isolation of the active medicinal compounds of the very best cannabis on earth, while improving the very same earth and people in doing so.
                    </p>
                    <br />
                    <p>
                        The heart and focus of Empress Extract products is Gemmy’s Full Extract Cannabis Oil. Full Extract Oil, also known as RSO, is a full-spectrum plant extract that has been used with success to treat many ailments, including but not limited to treating cancer, epilepsy, seizures, MS, chronic pain, sleep problems, arthritis, glaucoma, anxiety, depression, PTSD, TBI headaches, and so much more.
                    </p>
                    <br />
                    <p>
                        Emily AKA Empress is certified Oakland equity and has large-scale cultivation experience, brand building, networking, and distribution experience along with a passion for the medicinal values of cannabis. Emily’s uncompromising focus on consistently producing top-quality, accessible extracts suited to diverse patient needs has always been the bedrock of her foundation.
                    </p>
                </div>
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
                    className="oak-equity"
                />
                <img
                    src={gemmyMain}
                    alt="Gemmy's Logo"
                    className="gemmy-main"
                />
                <img
                    src={empressOpac}
                    alt="Empress Logo"
                    className="empress-opac"
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
                <div className="text-white text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-josefin font-josefin text-shadow">
                    Empress Awards
                </div>
            </div>
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${award})`, backgroundPosition: 'bottom' }}
            >
                <div className="absolute inset-0 flex items-start justify-center bg-black bg-opacity-50">
                    <p className="text-white text-center text-xl font-josefin award-text">
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
            <AwardRoll />
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