import React from 'react';
import Button from '../../../../components/Button/Button';
import './ASB2023.css';


const ASBLOGO = require('./../../../../assets/extras/asb2023/ASB_Logo.png');
const COLLABORATORS = [
    {
        name: 'Carlos Carrasquillo', 
        title: 'Graduate Student', 
        src: require('./../../../../assets/collaborators/carlos.jpg')
    },
    {
        name: 'Aakash Bajpai', 
        title: 'Graduate Student', 
        src: require('./../../../../assets/collaborators/aakash.jpg')
    },
    {
        name: 'Divya Iyengar', 
        title: 'Graduate Student', 
        src: require('./../../../../assets/collaborators/divya.jpg')
    },
    {
        name: 'Killian Collins', 
        title: 'Undergraduate Student', 
        src: require('./../../../../assets/collaborators/killian.jpg')
    },
    {
        name: 'Dr. Anirban Mazumdar', 
        title: 'Assistant Professor', 
        src: require('./../../../../assets/collaborators/anirban.jpg')
    },
    {
        name: 'Dr. Aaron Young', 
        title: 'Associate Professor', 
        src: require('./../../../../assets/collaborators/aaron.jpg')
    },

]


function ASB2023() {

    return (
            <div className="conference-container">
                <div className="row">
                    <div className='title-block'>
                        <h1>Welcome ASB 2023!</h1>
                        <br/>
                        <div className='asb2023-details'>
                            <h3>Knoxville, Tennessee</h3>
                            <h3>August 8-11, 2023</h3>
                        </div>
                    </div>
                    <div className="iframe-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Mh0tAw-QQfc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                
                <Button name="View Poster"/>

                <div className="asb-logo-container">
                    <img src={ASBLOGO} alt='ASB Logo'/>
                </div>  

                <div className="conference-collaborators-container">
                    <h2>Collaborators</h2>
                    <div className='conference-collaborators-images'>
                        {COLLABORATORS.map((collaborator, index) => (
                            <div className='conference-collaborator' key={index}>
                                <img src={collaborator.src} key={index} alt={collaborator.name}/>
                                <div className='conference-collabrator-titleblock'>
                                    <h3>{collaborator.name}</h3>
                                    <span className='conference-collaborator-occupation'>{collaborator.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  

            </div>
    )
}

export default ASB2023
