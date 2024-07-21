import React from 'react';
import awardVid from '../Assets/event-vid.mp4';
import bannanaVid from '../Assets/bannana-vid.mp4';

const AwardRoll: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '25rem',  // Fixed height of 25rem
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'black'
        }}>
            <video
                src={awardVid}
                style={{
                    flexShrink: 0,
                    width: '50%',  // Each video takes half the width
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'  // Adjusted to show higher part of the video
                }}
                autoPlay
                muted
                loop
            />
            <video
                src={bannanaVid}
                style={{
                    flexShrink: 0,
                    width: '50%',  // Each video takes half the width
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'  // Adjusted to show higher part of the video
                }}
                autoPlay
                muted
                loop
            />
        </div>
    );
}

export default AwardRoll;
