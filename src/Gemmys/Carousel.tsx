import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import images
import gemFrGrn from '../Assets/front-gemmy-grn.jpg';
import syringe from '../Assets/syringe-bk-u.png';
import gemBkGrn from '../Assets/back-gemmy-grn.jpg'
import gemFrOrg from '../Assets/front-gemmy-org.jpg';
import gemBkOrg from '../Assets/back-gemmy-org.jpg'



const Carousel: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{ height: '100%' }} // Ensure Swiper container fills the screen
            >
                <SwiperSlide className="relative w-full h-full flex">
                    <div className="flex w-full h-full">
                        <div className="w-1/2 h-full bg-emerald-200 flex flex-col justify-start items-center text-black">
                            <div className="max-w-md mx-auto text-center p-6 mt-12">
                                <h1 className="text-4xl font-bold mb-4">Heading 1</h1>
                                {/* <p className="text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                                </p> */}
                            </div>
                        </div>
                        <div className="w-1/2 h-full bg-yellow-200 flex flex-col justify-start items-center text-black">
                            <div className="max-w-md mx-auto text-center p-6 mt-12">
                                {/* <h1 className="text-4xl font-bold mb-4">Heading 2</h1> */}
                                <p className="text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="relative flex flex-col items-center justify-center space-y-4">
                            <img
                                src={syringe}
                                alt="Syringe"
                                className="z-10"
                                style={{ marginTop: '-1rem', maxHeight: '12rem', objectFit: 'contain' }}
                            />
                            <img
                                src={gemFrGrn}
                                alt="Front Gemmy Green"
                                className="z-20"
                                style={{ marginTop: '-.5rem', maxHeight: '12rem', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-full flex">
                    <div className="flex w-full h-full">
                        <div className="w-1/2 h-full bg-emerald-200 flex flex-col justify-center items-center text-black p-4">
                            <div className="max-w-md text-center p-16">
                                <h1 className="text-4xl font-bold mb-4">Heading</h1>
                                <p className="text-lg px-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 h-full bg-yellow-200"></div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <img
                            src={gemBkGrn}
                            alt="Back Gemmy Green"
                            className="max-w-full object-contain"
                            style={{ maxHeight: '30rem' }} // Increased size
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-full flex">
                    <div className="flex w-full h-full">
                        <div className="w-1/2 h-full bg-amber-600 flex flex-col justify-start items-center text-black">
                            <div className="max-w-md mx-auto text-center p-6 mt-12">
                                <h1 className="text-4xl font-bold mb-4">Heading 1</h1>
                                <p className="text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 h-full bg-amber-200 flex flex-col justify-start items-center text-black">
                            <div className="max-w-md mx-auto text-center p-6 mt-12">
                                <h1 className="text-4xl font-bold mb-4">Heading 2</h1>
                                <p className="text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="relative flex flex-col items-center justify-center space-y-4">
                            <img
                                src={syringe}
                                alt="Syringe"
                                className="z-10"
                                style={{ marginTop: '-1rem', maxHeight: '12rem', objectFit: 'contain' }}
                            />
                            <img
                                src={gemFrOrg}
                                alt="Front Gemmy Orange"
                                className="z-20"
                                style={{ marginTop: '-.5rem', maxHeight: '12rem', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-full flex">
                    <div className="flex w-full h-full">
                        <div className="w-1/2 h-full bg-amber-600 flex flex-col justify-center items-center text-black p-4">
                            <div className="max-w-md text-center p-16">
                                <h1 className="text-4xl font-bold mb-4">Heading</h1>
                                <p className="text-lg px-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 h-full bg-amber-200"></div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <img
                            src={gemBkOrg}
                            alt="Back Gemmy Green"
                            className="max-w-full object-contain"
                            style={{ maxHeight: '30rem' }} // Increased size
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;