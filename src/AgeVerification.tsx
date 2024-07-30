import React from 'react';
import gemmy from './Assets/Gemmys-Logo.png';
import empress from './Assets/Empress-Purple.png';

interface AgeVerificationProps {
    onConfirm: () => void;
    onReject: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onConfirm, onReject }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(75, 90, 112)' }} // Slightly transparent slate background
        >
            <div className="bg-[#343a40] p-8 w-80 rounded-lg shadow-lg text-center text-cyan-100">
                <div className="flex justify-center mb-4">
                    <img src={gemmy} alt="Gemmy's Logo" className="object-contain w-[50%] h-auto -mt-7" />
                    <img src={empress} alt="Empress Logo" className="object-contain w-[55%] h-auto mt-2" />
                </div>
                <p className="mb-4 text-cyan-300 font-josefin text-lg -mt-10">Are you 21 or older?</p>
                <div className="space-x-4">
                    <button onClick={onConfirm} className="bg-zinc-900 text-cyan-300 font-josefin px-4 py-2 text-lg rounded-lg">Yes</button>
                    <button onClick={onReject} className="bg-zinc-900 text-cyan-300 font-josefin px-4 py-2 text-lg rounded-lg">No</button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;
