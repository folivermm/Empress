import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './Home/Home';
import Gemmy from './Gemmys/Gemmy'
import Education from './Education/Education'

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gemmys" element={<Gemmy />} />
          <Route path="/Education/Testimonials" element={<Education />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
