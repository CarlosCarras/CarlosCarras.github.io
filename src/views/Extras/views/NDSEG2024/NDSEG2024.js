import React from 'react';
import Button from '../../../../components/Button/Button';
import './NDSEG2024.css';


const POSTER = require('./../../../../assets/extras/ndseg2024/ndseg2024_poster.pdf');
const PPT = require('./../../../../assets/extras/ndseg2024/ndseg2024_ppt.pdf');
const COLLABORATORS = [
    {
        name: 'Carlos Carrasquillo', 
        title: 'Graduate Student', 
        src: require('./../../../../assets/collaborators/carlos.jpg')
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


function NDSEG2024() {

    return (
            <div className="ndseg2024-container">
                <div className='ndseg2024-title-block'>
                    <h1>Welcome NDSEG 2024!</h1>
                </div>
                
                <div className="ndseg2024-button-container">
                    <Button name="View Poster" href={POSTER} target="_blank"/>
                    <Button name="View PPT" href={PPT} target="_blank"/>
                </div>

                <div className="ndseg2024-logo-container">
                    {/* <img src={IRIMLOGO} alt='ASB Logo'/> */}
                </div>  

                <div className="ndseg2024-collaborators-container">
                    <h2>Collaborators</h2>
                    <div className='ndseg2024-collaborators-images'>
                        {COLLABORATORS.map((collaborator, index) => (
                            <div className='ndseg2024-collaborator' key={index}>
                                <img src={collaborator.src} key={index} alt={collaborator.name}/>
                                <div className='ndseg2024-collabrator-titleblock'>
                                    <h3>{collaborator.name}</h3>
                                    <span className='ndseg2024-collaborator-occupation'>{collaborator.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  

            </div>
    )
}

export default NDSEG2024
