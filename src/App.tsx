import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './Home/Home';
import Gemmy from './Gemmys/Gemmy'
import Testimonials from './Education/Testimonials'
import Contact from './Contact_Page/Contact'
import About from './About/About'

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Gemmy />} />
          <Route path="/Education" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
