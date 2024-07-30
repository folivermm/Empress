import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Gemmy from './Gemmys/Gemmy';
import Contact from './Contact_Page/Contact';
import About from './About/About';
import Education from './Education/Education';
import AgeVerification from './AgeVerification';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleConfirm = () => {
    setIsModalVisible(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com'; // Redirect to browser's home page
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {isModalVisible && (
          <AgeVerification onConfirm={handleConfirm} onReject={handleReject} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Gemmy />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
