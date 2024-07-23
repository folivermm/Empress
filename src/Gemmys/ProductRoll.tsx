import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import gemFrGrn from '../Assets/front-gemmy-grn.jpg';
import syringe from '../Assets/syringe-bk-u.png';
import gemFrOrg from '../Assets/front-gemmy-org.jpg';
import ImageMagnifier from './ImageMagnifier';

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
          delay: 5000,
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
              <ImageMagnifier
                src={gemFrGrn}
                width="40%"
                height="auto"
                zoomLevel={1.5}
                className="center-image2"
              />
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
              <ImageMagnifier
                src={gemFrOrg}
                width="40%"
                height="auto"
                zoomLevel={1.5}
                className="center-image2"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductRoll;
