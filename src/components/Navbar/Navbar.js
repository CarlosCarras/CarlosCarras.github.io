import React, {useState, useEffect} from "react";
import "./Navbar.css"


const LOGO = require('./../../assets/logo.png'),
      LOGO_DARKMODE = require('./../../assets/logo_dark.png');


function Navbar(props) {
    const [isDarkmode, setDarkMode] = useState(props.darkmode);
    const [backgroundActive, setBackgroundActive] = useState(false);

    useEffect(() => {
        const updateNavbarBackgroundStatus = () => {
            setBackgroundActive(window.scrollY >= 90)
        }

        window.addEventListener('scroll', updateNavbarBackgroundStatus);
        return () => {
            window.removeEventListener('scroll', updateNavbarBackgroundStatus);
        };
    }, []);

    useEffect(() => {
        setDarkMode(props.darkmode)
    }, [props.darkmode]);

    return (
        <nav className={`navbar ${backgroundActive ? 'bg-active' : ''}`}>
            <div className="navbar-cell"> 
                <img className="logo" src={backgroundActive || isDarkmode ? LOGO_DARKMODE: LOGO} alt="logo"/>
            </div>
            <div className="navbar-cell nav-links-container"> 
                <a href="/">Home</a>
                <a href="/Resume">Resume</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
                <a href="/">Gallery</a>
            </div>
        </nav>
    )
}

export default Navbar;