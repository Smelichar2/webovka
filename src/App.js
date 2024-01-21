import logo from './logo.svg';
import './App.css';
import Portfolio from "./pages/portfolio";


import Header from "./components/header/header";

import React from 'react';
import Background from "./components/background/background";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage"
import About from './pages/about';
import Contact from './pages/contact';
import Projects from "./pages/Projects"


const App = () => {
  return (
      <Router>
          <Navbar />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
      </Router>
  );
};

export default App;