import React from "react";
import "./Footer.css";


function Footer() {
    return (
        <div className="footer-container">
            <span> 
                Built on the shoulders of giants &nbsp;❤️&nbsp; Source code available on 
                <a href="./" target="_blank" rel="noopener noreferrer"> GitHub </a>
            </span>

            <span className="copyright-notice">
                <span> &copy;{new Date().getFullYear()} </span> 
                Carlos Carrasquillo 
            </span>
        </div>
    )
}

export default Footer;