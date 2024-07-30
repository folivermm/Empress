import React from 'react'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import './Education.css'

import dosage from '../Assets/dosage.jpg';
import trifold from '../Assets/Gemmys_trifold.jpg';
import tincture from '../Assets/tincture.webp';
import food from '../Assets/food.webp';
import syringes from '../Assets/syringes.png';
import syringes2 from '../Assets/syringes-2.png';
import Testimonials from './Testimonials';

const Education: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="bg-slate-100 h-auto w-full border-4 border-indigo-300 flex items-center justify-center font-josefin p-4">
                <div className="text-center text-gray-800">
                    <div className="flex items-baseline">
                        <h3 className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg font-bold leading-tight">
                            Disclaimer:
                        </h3>
                        <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg leading-tight">
                            The information on this website is for informational purposes only. I am not a doctor, and the content provided here is based on anecdotal evidence and personal experiences shared by others who have reported benefits or success stories. Always consult with a qualified healthcare professional before starting any new treatment or using any product mentioned on this site.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center items-center h-full">
                <img
                    src={trifold}
                    alt="Trifold"
                    className="max-w-full max-h-full"
                />
            </div>
            <div className="bg-slate-100 h-auto w-full border-4 border-indigo-300 flex items-center justify-center font-poppins p-4">
                <div className="text-center text-gray-800">
                    <h1 className="font-bold text-md md:text-md lg:text-lg xl:text-xl">
                        Dosage Measurements and Methods
                    </h1>
                </div>
            </div>
            <div className="flex justify-between items-start p-6" style={{ backgroundColor: '#4b5a70' }}>
                <div className="flex flex-col items-center w-1/2">
                    <img
                        src={syringes2}
                        alt="Syringes 2"
                        className="responsive-image p-4"
                    />
                    <div className="responsive-container text-center text-white font-poppins">
                        <h1 className="responsive-heading font-bold">
                            Tips for draining FECO/RSO from syringe:
                        </h1>
                        <p className="responsive-paragraph">
                            Run syringe under hot water for 60-90 seconds. Or boil some water and then transfer boiling water to a cup. Place syringe over the top of the cup to let steam soften oil. This will make it easier to remove the oil from the syringe.
                        </p>
                    </div>
                </div>
                <div className="text-white p-4 w-[75%] font-poppins">
                    <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">
                        Due to the extremely potent nature of Gemmy’s we always suggest talking to medical professionals with experience in medical cannabis for first-time users. Both first-time users and regular cannabis users should use extreme caution when using Gemmy’s. We cannot stress enough the importance of starting with a minuscule amount of oil and working up from there, what is known as titrating your dose. Regardless of the method that is being used, the initial dose should be no more than half the size of a grain of rice, or even ¼ of the size. All users should wait at least an hour for Gemmy’s to take effect before increasing your dose. Like many other non-recreational substances, you should never drive or operate machinery while medicating and keep it away from pets and children.
                    </p>
                    <br />
                    <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">
                        Depending on the severity of the medical condition there are different dosing expectations for different ailments. The Rick Simpson Method outlines his personal prescription for what cured his cancer and what he has shared with others.
                    </p>
                </div>
            </div>
            <div className="responsive-container-rso">
                <div className="content-wrapper p-6">
                    <div className="flex-container items-start space-x-0 md:space-x-6">
                        <div className="text-white p-4 md:w-[50%] font-poppins">
                            <h1 className="text-sm sm:text-xl md:text-2xl font-bold">The Rick Simpson Method</h1>                            <br />
                            <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg"> For medical patients, it is always recommended to consult your physician before stopping or starting any new treatment regimen. However, as there are many physicians who refuse to discuss medical cannabis as a course of treatment, many people proceed with the Rick Simpson method at their own discretion.</p>
                            <br />
                            <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg"> The end goal: gradually consume 60 grams of cannabis oil over the course of a 90-day period.</h2>
                            <br />
                            <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Week 1:</h2>
                            <br />
                            <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">First dose ¼ drop. Three equal doses each day of a half grain of rice or less every 8 hours. For a slow start, half a rice grain at night then double after 4 days.</p>
                            <br />
                            <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Week 2-5:</h2>
                            <br />
                            <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Double your dose every four days. (the average person will take 3-5 weeks to reach the full 1 gram per day dose)</p>
                            <br />
                            <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Weeks 5-12: </h2>
                            <br />
                            <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg"> 8-9 rice-sized drops every eight hours. (1 gram RSO daily) until you have consumed 60 grams total. </p>
                        </div>
                        <div className="image-container flex flex-col items-center pt-20 md:pt-0">
                            <img
                                src={dosage}
                                alt="Dosage"
                                className="dosage-image"
                            />
                            <img
                                src={syringes}
                                alt="Syringes"
                                className="syringe-rso-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start p-6">
                <div className="flex items-start space-x-6">
                    <div className="flex flex-col items-center">
                        <img
                            src={food}
                            alt="food"
                            className="w-full max-w-[20rem] xxs:max-w-[0] xs:max-w-[0] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[20rem] xl:max-w-[23rem] p-4 mt-20"
                        />
                        <img
                            src={tincture}
                            alt="tincture"
                            className="w-full max-w-[20rem] xxs:max-w-[0] xs:max-w-[0] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[20rem] xl:max-w-[23rem] p-4 mt-10"
                        />
                    </div>
                    <div className="text-white p-4 max-w-lg font-poppins">
                        <h1 className="text-sm sm:text-xl md:text-2xl font-bold"> Dosing Methods</h1>
                        <br />
                        <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Oral Application</h2>
                        <br />
                        <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Oral ingestion is the most common and easiest method of ingesting Gemmy’s Oil. It can be consumed raw, cooked, or frozen. Most people cite a bitter or slightly unpleasant taste, so it is suggested to consume with something else to mask the taste. Mixing it with hot oil for cooking recipes or adding it directly to a hot pan with butter or oil are common methods. Among the most frequently cited methods are filling an empty gelatin capsule with your pre-measured dose, freezing it between two pieces of parchment paper and consuming like a frozen pill, or mixing a pre-measured dose with your meals.</p>
                        <br />
                        <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Tincture Preparation Using RSO</h2>
                        <br />
                        <ol className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg list-decimal pl-6 space-y-2">
                            <li><strong>Warm Water:</strong> Heat water in a saucepan until warm (not boiling).</li>
                            <li><strong>Measure MCT Coconut Oil:</strong> Measure the MCT coconut oil needed for your tincture bottle, leaving space for the RSO/Gemmy's.</li>
                            <li><strong>Heat MCT Oil:</strong> Place the measured MCT oil in a glass jar and put the jar in the warm water bath.</li>
                            <li><strong>Add FECO/RSO:</strong> Inject Gemmy's into warm MCT oil.</li>
                            <li><strong>Mix Thoroughly:</strong> Stir the mixture thoroughly until well combined.</li>
                            <li><strong>Transfer to Bottle:</strong> Pour the mixture into the empty tincture bottle.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start p-6">
                <div className="flex items-start">
                    <div className="text-white p-4 w-full max-w-3xl font-poppins">
                        <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Topical Application</h2>
                        <br />
                        <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Topical application refers to the application to your body surfaces like skin or mucous membranes. The process works because Gemmy’s is absorbed through your skin and reaches the site of pain or inflammation without going through the body’s system. This application is more preferred by people for pain management and control or those who may have difficulty ingesting medication or are prone to vomiting.</p>
                        <br />
                        <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Inhalation</h2>
                        <br />
                        <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg" >Because Gemmy’s is so potent this is not the preferred method of consuming Gemmy’s. Many people use this method because it is the most bio-available method, meaning it is the most readily available in your body after consuming it. When you smoke or vape the active components are immediately triggered and start to take effect within minutes. Other methods take 30 minutes to over an hour for the effects to become noticeable.</p>
                        <br />
                        <h2 className="font-bold text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">Suppository</h2>
                        <br />
                        <p className="text-xxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg">This method is primarily for people who are more medically fragile, have muscular conditions or are unable to chew or eat properly. Through this method the oil melts in the rectal cavity and is absorbed through the bloodstream. Gemmy’s Oil should be treated like any other suppository medication. Depending on the suppository product you are using, the medium may be different. Place your pre-measured dose of Gemmy’s in the suppository medium and use as directed by the suppository manufacturer.</p>
                        <br />
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 h-auto w-full border-4 border-indigo-300 flex items-center justify-center font-poppins p-4">
                <div className="text-center text-gray-800">
                    <h1 className="font-bold text-lg lg:text-lg xl:text-2xl">Testimonials</h1>
                </div>
            </div>
            <Testimonials />
            <Footer />
        </div >
    )
}

export default Education
