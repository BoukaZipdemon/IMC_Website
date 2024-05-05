import React, { useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    };
    return ( 
        <nav className="navbar">
            <div className="left">
                <a href="/"><img id="logo" src="imclogo.png" alt="" /></a>
                <h1>Isamm Microsoft club</h1>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <div className={`links ${isActive ? "active" : ""}`}>
                <Link to='/'><a href="">Home</a></Link>
                <Link to='Aboutus' spy={true} smooth={true} offset={0} duration={500}><a href="">About Us</a></Link>
                <Link to='Services' spy={true} smooth={true} offset={-5} duration={500}><a href="">Services</a></Link>
                <Link to='team' spy={true} smooth={true} offset={-50} duration={500}><a href="">Team</a></Link>
                <Link id='special'  to='Loginsignup' spy={true} smooth={true} offset={-30} duration={500}>Join us</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;