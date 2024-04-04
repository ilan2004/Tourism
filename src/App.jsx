import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import AnimatePresence and motion
import Navbars from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import Home from './Pages/Home';
import Room from './Pages/Room';
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import VirtualPanoramaPage from './Components/Bookcomp/Options/room1/Reactroom';
import Curve from './Components/Layout/Curve';
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
        <AnimatePresence mode='wait'> {/* Wrap the content with AnimatePresence */}
          {!contentLoaded ? (
            <Loader key="loader" /> // Assign a unique key to Loader
          ) : (
            <>
              <Navbars />
              <Routes>

                <Route exact path="/" element={<Home />} />

                <Route path="/Booking" element={<Room />} />
                <Route path="/virtual" element={<VirtualPanoramaPage />} />
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


