import React, { useState } from 'react';
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    };
    return ( 
        <nav className="navbar">
            <div className="left">
                <img id="logo" src="imclogo.png" alt="" />
                <h1>Isamm Microsoft club</h1>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <div className={`links ${isActive ? "active" : ""}`}>
                <a href="#">Home</a>
                <a href="#">about</a>
                <a href="#">services</a>
                <a href="#">team</a>
                <a href="#" id='special'>Join us</a>
            </div>
        </nav>
        

     );
}
 
export default Navbar;