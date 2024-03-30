import { useState } from 'react';
import { useEffect, useRef } from "react";
import './App.css';
import Navbars from './Components/Navbar/Navbar';
import { useInView } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import BookHero from './Components/Bookcomp/Hero/Hero';
import Home from './Pages/Home';
import Room from './Pages/Room';
function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='App'>
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Render Home component as element prop */}
          <Route path="/Booking" element={<Room />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;