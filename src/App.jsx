import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import AnimatePresence and motion
import Navbars from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import Home from './Pages/Home';
import Room from './Pages/Room';
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Car from './Pages/Car';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading with a timeout
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 5000); // Adjust the timeout as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      <ReactLenis root>
        <Router>
          <ScrollToTop /> {/* ScrollToTop component to handle scrolling */}
          <AnimatePresence mode='wait'> {/* Wrap the content with AnimatePresence */}
            {!contentLoaded ? (
              <Loader key="loader" /> // Assign a unique key to Loader
            ) : (
              <>
                <Navbars />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/Booking" element={<Room />} />
                  <Route path="/RentCar" element={<Car />} />
                </Routes>
                <Footer />
              </>
            )}
          </AnimatePresence>
        </Router>
      </ReactLenis>
    </div>
  );
}

export default App;



