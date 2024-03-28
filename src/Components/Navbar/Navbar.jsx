

import './Navbar.css'
import logo from  '../../assets/logo.png';
const Navbars =() => {
  return (
    <>
    <nav class="whetrip">
      <label class="logo">
        <img src={logo}
        width="60px"
        height="60px"/>
      <p class="label">WHETRIP</p>
      </label>
        <ul>
            <li><a class="active" href="#main">Home</a></li>
            <li><a href="#about">gallery</a></li>
            <li><a >Book a Room</a></li>
            <li><a >Rent a car</a></li>
            <li><a >AI</a></li>
             
        </ul>
     </nav>

    </>
  );
}

export default Navbars;