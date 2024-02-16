import React, {useState, useEffect} from "react";
import "./Navbar.css"

import Sidebar from './Sidebar/Sidebar';
import DarkmodeToggle from './../DarkmodeToggle/DarkmodeToggle';

const LOGO = require('./../../assets/logo.png'),
      LOGO_DARKMODE = require('./../../assets/logo_dark.png');


function Navbar(props) {
    const [isDarkmode, setDarkMode] = useState(props.darkmode);
    const [logo, setLogo] = useState(isDarkmode ? LOGO_DARKMODE : LOGO);
    const [sidebarLogo, setSidebarLogo] = useState(isDarkmode ? LOGO_DARKMODE : LOGO);
    const [backgroundActive, setBackgroundActive] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    /* toggle darkmode */
    const toggleDarkMode = () => {
        props.toggleDarkMode();
        const newIsDarkMode = !isDarkmode;
        setDarkMode(newIsDarkMode)
        setLogo(newIsDarkMode ? LOGO_DARKMODE : LOGO);
        setSidebarLogo(newIsDarkMode ? LOGO_DARKMODE : LOGO);
    }

    /* the menu is toggled when */
    const toggleSidebar = () => {
        setTimeout(() => {
            setSidebarOpen(!isSidebarOpen);
        }, 0);
    };

    /* navigation bar turns black when you scroll down */
    useEffect(() => {
        const updateNavbarBackgroundStatus = () => {
            const newIsBackgroundActive = window.scrollY >= 90;
            setBackgroundActive(newIsBackgroundActive)
            setLogo((newIsBackgroundActive || isDarkmode) ? LOGO_DARKMODE : LOGO);
        }

        window.addEventListener('scroll', updateNavbarBackgroundStatus);
        return () => {
            window.removeEventListener('scroll', updateNavbarBackgroundStatus);
        };
    }, [isDarkmode]);

    /* sidebar disappears when the user clicks outside of it */
    useEffect(() => {
        
        const closeSidebar = (event) => {
            if (!event.target.closest('.sidebar') && !event.target.closest('.hamburger-menu')) {
                setSidebarOpen(false);
            }
            else if (isSidebarOpen && !event.target.closest('.menu-item')) {
                setSidebarOpen(false);
            }
            else if (isSidebarOpen && event.target.closest('.scroll-item')) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('click', closeSidebar);

        return () => {
            document.removeEventListener('click', closeSidebar);
        };
    }, [isSidebarOpen, setSidebarOpen]);

    const menu = (
        <div className="menu">
            <DarkmodeToggle darkmode={props.darkmode} toggleDarkMode={toggleDarkMode}/>
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/gallery">Gallery</a>
            <a href="/extras">Extras</a>
            <div className="hambuerger-menu" onClick={toggleSidebar}>&#9776;</div>
        </div>
    )

    return (
        <nav className={`navbar ${backgroundActive ? 'bg-active' : ''}`}>
            <div> 
                <a href="/">
                    <img className="logo" src={logo} alt="logo"/>
                </a>
            </div>
            { menu }
            <Sidebar src={sidebarLogo} menu={menu} active={isSidebarOpen}/>
        </nav>
    )
}

export default Navbar;