import './Navbar.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import Header from './Header/index';
import { useEffect } from 'react';

const Navbars = () => {
  // Scroll to the top whenever the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="whetrip">
        <label className="logo">
          <img src={logo} alt="Logo" width="60px" height="60px" />
          <p className="label">WHETRIP</p>
        </label>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/Booking" activeClassName="active">Book a Room</NavLink></li>
          <li><NavLink to="/RentCar" activeClassName="active">Rent a Car</NavLink></li>
        </ul>
        <Header/>
      </nav>
    </>
  );
}

export default Navbars;

