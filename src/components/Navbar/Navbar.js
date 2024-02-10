import React, {useState, useEffect} from "react";
import "./Navbar.css"


function Navbar() {
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

      
    return (
        <nav className={`navbar ${backgroundActive ? 'bg-active' : ''}`}>
            Hello
        </nav>
    )
}

export default Navbar;