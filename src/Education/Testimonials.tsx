import React from 'react';
import './Testimonials.css';



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

            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card" style={{ backgroundColor: '#343a40' }}>
                        <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">{testimonial.text}</p>
                        <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">- {testimonial.author}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Testimonials;
