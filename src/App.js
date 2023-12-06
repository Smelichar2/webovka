import logo from './logo.svg';
import './App.css';
import Portfolio from "./pages/portfolio";
import Carousel from "./components/carousels/carousel";
import Skillset from "./components/skills/skillset";
import Header from "./components/header/header";
import {DatePicker} from "antd";
import React from 'react';
import Background from "./components/background/background";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home"
import About from './pages/about';
import Contact from './pages/contact';
import Projects from "./pages/Projects"


const App = () => {
  return (
      <Router>
        <div>
          <Navbar /> {/* Přidejte navigační lištu */}
          <Background>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Projects/>} />
            </Routes>
            {/* Přidejte zde ostatní komponenty */}
            <Header />
            <Portfolio />
            <Carousel />
            <Skillset />
            <DatePicker />
          </Background>
        </div>
      </Router>
  );
};

export default App;