import React from 'react';
import {Button} from 'antd';
import { Link as ScrollLink } from "react-scroll";
import './conference.css';
import ASBLogo from './ASB_Logo.png';

class HowItsMade extends React.Component {

    render() {
        return(
            <div className="conference-container">
                <h1 style={{padding: "10vh 5vh 8vh 5vh"}}>Welcome ASB2023!</h1>
                
                <p> This is a test.
                </p>

                <div class="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <br/>
                <br/>
                <p> Thank you for checking out my project!
                </p>

                <div className="asb-logo-container">
                    <img src={ASBLogo} alt='ASB Logo'/>
                </div>
            </div>
        )
    }
}

export default HowItsMade
