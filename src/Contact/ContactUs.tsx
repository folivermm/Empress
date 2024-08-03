import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';

export const ContactUs: React.FC<{ className?: string }> = ({ className }) => {
    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_h5eye0c', 'template_qxvloox', form.current, 'ew90eMbAMHm01etzE')
                .then(
                    () => {
                        setSuccessMessage('Your message has been sent successfully!');
                        setErrorMessage(null);
                        form.current?.reset(); // Reset the form fields after successful submission
                    },
                    (error) => {
                        setErrorMessage('Failed to send your message. Please try again later.');
                        setSuccessMessage(null);
                    }
                );
        }
    };

    return (
        <div id="contact" className={classNames("p-12 flex flex-col items-center justify-center text-center", className)} style={{ backgroundColor: 'rgba(75, 90, 112, 0.5)' }}>
            <span className="text-white text-lg mb-6">Please feel free to contact me with any questions or concerns</span>
            <form className="contactForm flex flex-col items-center justify-center w-11/12 max-w-2xl" ref={form} onSubmit={sendEmail}>
                <input className="name w-full max-w-lg mb-4 p-3 text-white bg-gray-800 border-none rounded" type="text" placeholder="Your Name" name="from_name" required />
                <input className="email w-full max-w-lg mb-4 p-3 text-white bg-gray-800 border-none rounded" type="email" name="reply_to" placeholder="Your Email" required />
                <textarea className="msg w-full max-w-lg mb-4 p-3 text-white bg-gray-800 border-none rounded" name="message" style={{ height: '200px' }} placeholder="Your Message" required />
                <button type="submit" className="submitBtn bg-gray-800 text-cyan-100 py-3 px-6 border-none rounded mt-4 cursor-pointer">Submit</button>
            </form>
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
    );
};