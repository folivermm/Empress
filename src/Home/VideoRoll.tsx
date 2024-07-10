import React, { useState } from 'react';
import grow from '../Assets/grow-vid.mp4';
import bud from '../Assets/bud-vid.mp4';
import crystal from '../Assets/crystal-vid.mp4';

const videos = [grow, bud, crystal];

const VideoRoll = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '25rem',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'black'
        }}>
            <video
                src={videos[currentVideoIndex]}
                style={{
                    flexShrink: 0,
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover'
                }}
                autoPlay
                muted
                onEnded={handleVideoEnd}
            />
        </div>
    );
}

export default VideoRoll;