import React from 'react';
import {Button} from 'antd';
import './ASB2023.css';
import ASBLogo from './ASB_Logo.png';
// import Poster from './ASB2023_poster.pdf';
const Poster = ""

const Carlos  = require('./../Pictures/collaborators-Carlos.jpg'),
      Divya   = require('./../Pictures/collaborators-Divya.jpg'),
      Aakash  = require('./../Pictures/collaborators-Aakash.jpg'),
      Anirban = require('./../Pictures/collaborators-Anirban.jpg'),
      Aaron   = require('./../Pictures/collaborators-Aaron.jpg'),
      Killian = require('./../Pictures/collaborators-Killian.jpg');

const collaborators = [
    [Carlos, 'Carlos Carrasquillo', 'Graduate Student'],
    [Aakash, 'Aakash Bajpai', 'Graduate Student'],
    [Divya, 'Divya Iyengar', 'Graduate Student'],
    [Killian, 'Killian Collins', 'Undergraduate Student'],
    [Anirban, 'Dr. Anirban Mazumdar', 'Assistant Professor'],
    [Aaron, 'Dr. Aaron Young', 'Associate Professor']
]

class HowItsMade extends React.Component {

    getCollaborators() {
        return (
            <div className='conference-collaborators-images'>
                {collaborators.map((item, index) => (
                    <div className='conference-collaborator'>
                        <img src={item[0]} key={index} alt={item[1]}/>
                        <div className='conference-collabrator-titleblock'>
                            <span className='conference-collaborator-name'>{item[1]}</span>
                            <br/>
                            <span className='conference-collaborator-occupation'>{item[2]}</span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return(
            <div className="conference-container">
                <div className="row">
                    <div className="two-col-format-column conference-col-left">
                        <div className='title-block'>
                            <span>Welcome</span>
                            <br/>
                            <span>ASB 2023!</span>
                            <br/>
                            <div className='asb2023-details'>
                                <span>Knoxville, Tennessee</span>
                                <br/>
                                <span>August 8-11, 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="two-col-format-column">
                        <div className="conference-col-right">
                            <div className="iframe-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Mh0tAw-QQfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                <div className="conference-collaborators-container">
                    <span className='conference-collaborators-title'>Collaborators</span>
                    {this.getCollaborators()}
                </div>  
            </div>
        )
    }
}

export default HowItsMade
