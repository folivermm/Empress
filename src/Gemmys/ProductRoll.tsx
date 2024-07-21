import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import gemFrGrn from '../Assets/front-gemmy-grn.jpg';
import syringe from '../Assets/syringe-bk-u.png';
import gemFrOrg from '../Assets/front-gemmy-org.jpg';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import your own styles
import './ProductRoll.css';

const ProductRoll: React.FC = () => {
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
              <h1 className="left-header2">
                ALWAYS STRAIN SPECIFIC
              </h1>
            </div>
            <div className="background-half right-background">
              <h1 className="right-header2">
                FECO/RSO
                <br />
                Full Spectrum Cannabis Oil
              </h1>
            </div>
            <div className="center-content2">
              <img src={syringe} alt="Syringe" className="syringe-image2" />
              <img src={gemFrGrn} alt="Gem" className="center-image2" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="full-slide">
            <div className="background-half left-background2">
              <h1 className="left-header2">
                FECO/RSO
                <br />
                Full Spectrum Cannabis Oil
              </h1>
            </div>
            <div className="background-half right-background2">
              <h1 className="left-header2">
                MADE WITH LOVE
              </h1>
            </div>
            <div className="center-content2">
              <img src={syringe} alt="Syringe" className="syringe-image2" />
              <img src={gemFrOrg} alt="Gem" className="center-image2" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductRoll;
