import './Navbar.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
const Navbars = () => {
  return (
    <>
      <nav className="whetrip">
        <label className="logo">
          <img src={logo} alt="Logo" width="60px" height="60px" />
          <p className="label">WHETRIP</p>
        </label>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">Gallery</NavLink></li>
          <li><NavLink to="/Booking" activeClassName="active">Book a Room</NavLink></li>
          <li><NavLink to="/RentCar" activeClassName="active">Rent a Car</NavLink></li>
          <li><NavLink to="/AI" activeClassName="active">AI</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbars;
