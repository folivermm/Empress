import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImgRoll.css'; // Adjust the path as needed
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import dreamS from '../Assets/dreamsesh.jpeg';
import goodF from '../Assets/good-friday.jpg';
import dou from '../Assets/dou-stand.jpg';
import blueDrs from '../Assets/blue-drs.jpeg';
import atlGlass from '../Assets/atl-glasshouse-2.jpg';
import pride from '../Assets/pride.jpg';
import west from '../Assets/west-promo.jpg';
import queens from '../Assets/queens.jpg';
import coFlapper from '../Assets/co-flapper.jpg';
import flapper from '../Assets/flapper.jpg';
import grnDress2 from '../Assets/grn-drs-2.jpg';
import oakWmn from '../Assets/okl-wmn.jpg';
import multiFair from '../Assets/multi-fair.jpg';
import bluFly from '../Assets/flyer-blue.jpg';
import quartet from '../Assets/quartet.jpg';
import marley from '../Assets/marley.jpg';
import chong from '../Assets/chong.jpg';
import cannoli from '../Assets/cannoli.jpg';

const ImgRoll: React.FC = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="img-container">
                    <img src={dreamS} alt="dream-sesh" className="swiper-img" />
                </div>
                <div className="img-container">
                    <img src={bluFly} alt="Blue-flyer" className="swiper-img" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="img-container">
                    <img src={oakWmn} alt="oak-wmn-sign" className="swiper-img" />
                </div>
                <div className="img-container">
                    <img src={goodF} alt="good-friday" className="swiper-img" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="img-container">
                    <img src={multiFair} alt="multi-fair" className="swiper-img" />
                </div>
                <div className="img-container">
                    <img src={quartet} alt="quartet" className="swiper-img" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="img-container">
                    <img src={dou} alt="dou-stand" className="swiper-img" />
                </div>
                <div className="img-container">
                    <img src={blueDrs} alt="blue-dress" className="swiper-img" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="img-container">
                    <img src={atlGlass} alt="atl-glass-house" className="swiper-img" />
                </div>
                <div className="img-container">
                    <img src={west} alt="west-promo" className="swiper-img" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="img-container">
                    <img src={pride} alt="pride-shirts" className="swiper-img" />
                </div>
                <div className="img-container">
                    <img src={queens} alt="queens" className="swiper-img" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="img-container">
                    <img src={coFlapper} alt="group-awards" className="swiper-img" />

                </div>
                <div className="img-container">
                    <img src={flapper} alt="flapper" className="swiper-img" />
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="img-container">
                    <img src={grnDress2} alt="green-dress-2" className="swiper-img" />
                </div>
                <div className="img-container">
                    <img src={marley} alt="marley" className="swiper-img" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="img-container">
                    <img src={chong} alt="chong" className="swiper-img" />

                </div>
                <div className="img-container">
                    <img src={cannoli} alt="cannoli" className="swiper-img" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default ImgRoll;
