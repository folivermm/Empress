import React from 'react';
import './Dosage.css';
import gemBck from '../Assets/gemmy-back.jpg';
import dosage from '../Assets/dosage.jpg';
import ImageMagnifier from './ImageMagnifier';
import { Link } from 'react-router-dom';

const Dosage: React.FC = () => {
  return (
    <div className="dosage-container">
      <div className="dosage-content">
        <div className="image-container4">
          <ImageMagnifier
            src={dosage}
            width="70%"  // Adjust width for dosage image
            height="auto"
            zoomLevel={1.5}
            className="dosage-img"
          />
          <ImageMagnifier
            src={gemBck}
            width="50%"  // Ensure the gem image is responsive
            height="auto"
            zoomLevel={1.5}
            className="gem-img"
          />
        </div>
        <div className="text-container">
          <h3>To Ingest Easily:</h3>
          <ul>
            <li>Put desired amount of oil into pill capsules.</li>
            <li>Place desired dose on parchment paper and place in freezer to harden.</li>
            <li>Put desired amount of oil in between two small pieces of chocolate.</li>
            <li>Put desired amount of oil on a small piece of bread and roll around oil then swallow.</li>
          </ul>
          <h3>To Use Topically/Transdermal:</h3>
          <ul>
            <li>Mix desired amount of oil with favorite lotion or oil to make topical.</li>
            <li>Apply oil directly to the affected skin area and cover with bandage; reapply to keep continuous coverage.</li>
          </ul>
          <h3>Other Uses:</h3>
          <p>Smokeable, make your own suppository or tincture, infuse Gemmy's into your favorite oil for cooking, baking, or consuming.</p>
          <div className="more-info-container">
            <h3>More Info:</h3>
            <Link to="/Education" className="education-button">Education</Link>          </div>
        </div>
      </div>
    </div>
  );
};

export default Dosage;
