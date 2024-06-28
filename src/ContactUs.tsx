import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';

export const ContactUs: React.FC<{ className?: string }> = ({ className }) => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };

    return (
        <div id="contact" className={classNames("bg-cyan-800 p-12 flex flex-col items-center justify-center text-center", className)}>
            <span className="text-white text-lg mb-6">Please feel free to contact with any questions or concerns</span>
            <form className="contactForm flex flex-col items-center justify-center w-11/12 max-w-2xl" ref={form} onSubmit={sendEmail}>
                <input className="name w-full max-w-lg mb-4 p-3 text-white bg-gray-800 border-none rounded" type="text" placeholder="Your Name" name="your_name" />
                <input className="email w-full max-w-lg mb-4 p-3 text-white bg-gray-800 border-none rounded" type="email" placeholder="Your Email" name="your_email" />
                <textarea className="msg w-full max-w-lg mb-4 p-3 text-white bg-gray-800 border-none rounded" name="message" style={{ height: '200px' }} placeholder="Your Message" />
                <button type="submit" className="submitBtn bg-gray-800 text-cyan-100 py-3 px-6 border-none rounded mt-4 cursor-pointer">Submit</button>
            </form>
        </div>
    );
};
