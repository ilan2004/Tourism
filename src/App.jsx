import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Only import AnimatePresence from framer-motion
import Navbars from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import { ReactLenis } from "@studio-freight/react-lenis";

// Lazy load the components for each route
const Home = React.lazy(() => import('./Pages/Home'));
const Room = React.lazy(() => import('./Pages/Room'));
const Car = React.lazy(() => import('./Pages/Car'));

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
    }, 4000); // Adjust the timeout as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      <ReactLenis root>
        <Router>
          <ScrollToTop />
          <AnimatePresence mode='wait'> {/* Use exitBeforeEnter for better animation */}
            <Suspense fallback={<Loader />}>
              {!contentLoaded ? (
                <Loader key="loader" />
              ) : (
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/Booking" element={<Room />} />
                  <Route path="/RentCar" element={<Car />} />
                </Routes>
              )}
            </Suspense>
          </AnimatePresence>
        </Router>
      </ReactLenis>
    </div>
  );
}

export default App;
