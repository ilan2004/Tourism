import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbars from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader'; // Import the Loader component
import Home from './Pages/Home';
import Room from './Pages/Room';
import VirtualPanoramaPage from './Components/Bookcomp/Options/room1/Reactroom';

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
      <Router>
        {!contentLoaded ? (
          <Loader /> // Show loader while content is loading
        ) : (
          <>
            <Navbars />
            <Routes>
              <Route exact path="/" element={<Home />} /> {/* Render Home component as element prop */}
              <Route path="/Booking" element={<Room />} />
              <Route path="/virtual" element={<VirtualPanoramaPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

