import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import gemFrGrn from '../Assets/front-gemmy-grn-half.png';
import syringe from '../Assets/syringe-bk-u.png';
import gemmyTr from '../Assets/gemmys-white.png';
import gemFrOrg from '../Assets/front-gemmy-org-half.png';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import your own styles
import './GemmyRoll.css';

const GemmyRoll: React.FC = () => {
    return (
        <div className="swiper-container h-screen w-screen">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className="full-slide">
                        <div className="background-half left-background">
                            <Link to="/Product" className="left-button">Product</Link>
                            <Link to="/Education" className="left-button">Education</Link>
                        </div>
                        <div className="background-half right-background">
                            <img src={gemmyTr} alt="Gemmy Transparent" className="right-image" />
                            <h1 className="right-header">
                                FECO/RSO
                                <br />
                                Full Spectrum Cannabis Oil
                            </h1>
                        </div>
                        <div className="center-content">
                            <img src={syringe} alt="Syringe" className="syringe-image" />
                            <img src={gemFrGrn} alt="Gem" className="center-image" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="full-slide">
                        <div className="background-half left-background2">
                            <img src={gemmyTr} alt="Gemmy Transparent" className="left-image" />
                            <h1 className="left-header">
                                FECO/RSO
                                <br />
                                Full Spectrum Cannabis Oil
                            </h1>
                        </div>
                        <div className="background-half right-background2">
                            <Link to="/Product" className="right-button">Product</Link>
                            <Link to="/Education" className="right-button">Education</Link>
                        </div>
                        <div className="center-content">
                            <img src={syringe} alt="Syringe" className="syringe-image" />
                            <img src={gemFrOrg} alt="Gem" className="center-image" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default GemmyRoll;
