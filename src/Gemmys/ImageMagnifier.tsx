import React, { useState } from 'react';
import './ImageMagnifier.css';

interface ImageMagnifierProps {
    src: string;
    width?: string;
    height?: string;
    zoomLevel?: number;
    className?: string;  // Add className prop
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
    src,
    width = '100%',
    height = 'auto',
    zoomLevel = 1.5,
    className
}) => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    const magnifierHeight = 100;
    const magnifierWidth = 200;

    return (
        <div
            className={`magnifier-container ${className}`}  // Apply className prop here
            style={{
                height: height,
                width: width
            }}
        >
            <img
                src={src}
                className="magnifier-img"
                onMouseEnter={(e) => {
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setSize([width, height]);
                    setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                }}
                onMouseLeave={() => {
                    setShowMagnifier(false);
                }}
                alt="img"
            />
            <div
                className="magnifier"
                style={{
                    display: showMagnifier ? '' : 'none',
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    backgroundImage: `url('${src}')`,
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
            ></div>
        </div>
    );
};

export default ImageMagnifier;
