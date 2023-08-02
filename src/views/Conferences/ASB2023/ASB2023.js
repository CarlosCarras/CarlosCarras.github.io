import React from 'react';
import {Button} from 'antd';
import './ASB2023.css';
import ASBLogo from './ASB_Logo.png';
import Poster from './ASB2023_poster.pdf';

class HowItsMade extends React.Component {

    render() {
        return(
            <div className="conference-container">
                <div className="row">
                    <div className="two-col-format-column conference-col-left">
                        <div className='title-block'>
                            <span>Welcome</span>
                            <br/>
                            <span>ASB 2023!</span>
                        </div>
                    </div>
                    <div className="two-col-format-column">
                        <div className="conference-col-right">
                            <div class="iframe-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Mh0tAw-QQfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-group">
                    <a href={Poster} target="_blank" rel="noopener noreferrer">
                        <Button type="submit" shape="round" size="large" ghost="true">
                            View Poster
                        </Button>
                    </a>
                </div>
                <div className="asb-logo-container">
                    <img src={ASBLogo} alt='ASB Logo'/>
                </div>  
            </div>
        )
    }
}

export default HowItsMade
