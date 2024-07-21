import React from 'react';
import '../Nav/Nav.css';
import './Testimonials.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'

import trifold from '../Assets/Gemmys_trifold.jpg';
import syringes from '../Assets/syringes.png';
import syringes2 from '../Assets/syringes-2.png';


const testimonials = [

    {
        text: "I was diagnosed with Actinic Keratosis when I was 20. Pretty Lame for someone so young to have these scaly red spots all over my face and arms. I’ve gone through many treatments for it. From creams to blue lights. All of which have pretty bad side effects and are painful. I started trying Gemmy’s topically for my face after yet another blue light treatment and I was surprised when it worked better than I could have hoped for! Much better than the last treatment I went through. The scaliness is greatly reduced and the redness has faded significantly. I’m so glad without the horrible side effects and pain as the other treatments I’ve been through.",
        author: "Amy T."
    },
    {
        text: "Gemm’ys Oil helps with anxiety and TBI headaches. In return it helps increase my appetite. My VA primary using cannabis over pharmaceuticals. Life is much better today",
        author: "Guy Y."
    },
    {
        text: "My mom was diagnosed with Stage 4 lung cancer 3 years ago. She was given 6 months or less to live. My mom would not still be here with us today if it wasn’t for Gemmy’s. For that I am certain of. I heard about the miracle medicine Gemmy’s through a good friend. And I am beyond grateful for this medicine and for giving true hope to patients.",
        author: "Gianna C."
    },
];

const Testimonials: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="relative flex justify-center items-center h-full">
                <img
                    src={trifold}
                    alt="Trifold"
                    className="max-w-full max-h-full"
                />
            </div>
            <div className="bg-slate-100 h-20 w-full border-4 border-indigo-300"></div>
            <div className="flex justify-center items-start p-6" style={{ backgroundColor: '#4b5a70' }}>
                <div className="flex items-start space-x-6">
                    <img
                        src={syringes2}
                        alt="Syringes"
                        className="max-w-xs max-h-full p-4"
                        style={{ height: '23rem', width: 'auto' }}
                    />
                    <div className="text-white p-4 max-w-md">
                        <h1 className="text-2xl font-bold">Random Text</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start p-6" style={{ backgroundColor: '#4b5a70' }}>
                <div className="flex items-start space-x-6">
                    <div className="text-white p-4 max-w-md">
                        <h1 className="text-2xl font-bold">Random Text 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.</p>
                    </div>
                    <img
                        src={syringes}
                        alt="Syringes 2"
                        className="max-w-xs max-h-full p-4"
                        style={{ height: '23rem', width: 'auto' }}
                    />
                </div>
            </div>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card" style={{ backgroundColor: '#343a40' }}>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <p className="testimonial-author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Testimonials;
