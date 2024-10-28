import React, { useState } from 'react';
import '../App.css';
import imageProfile from '../images/profile.jpeg';
import imageLogo from '../images/logo.png';

const Navbar = () => {
    // const [menuOpen, setMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return (
        <header /* className={menuOpen ? "menu-visible" : ""} */>
            <div className="logo">
                <img className='ada' src={imageLogo} alt="Logo" />
                <h1>sololearn</h1>
            </div>
            {/* <button className="navbar-toggle" onClick={toggleMenu}>
                Menu
            </button> */}
            <nav>
                <ul>
                    <li><a href="#">Leaderboard</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Code Playground</a></li>
                    <li><a href="#">Discuss</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><button className="go-pro">Go PRO</button></li>
                    <li><p>465</p></li>
                    <li><img src={imageProfile} alt="Profile" /></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
