import { useState } from 'react'
import { useEffect, useRef } from "react";
import './App.css'
import Navbars from './Components/Navbar/Navbar'
import { useInView } from "framer-motion";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='App'>
        <Router>
          <Navbars/>
          <Home/>
          <Footer/>
      </Router>
    </div>
  )
}

export default App
