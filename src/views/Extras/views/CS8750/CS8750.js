import React from 'react';
import Button from '../../../../components/Button/Button';
import './CS8750.css';


const IRIMLOGO = require('./../../../../assets/extras/irim/IRIM_Logo.png'),
      POSTER = require('./../../../../assets/extras/irim/cs8750_poster.pdf');
const COLLABORATORS = [
    {
        name: 'Dr. Anirban Mazumdar', 
        title: 'Assistant Professor', 
        src: require('./../../../../assets/collaborators/anirban.jpg')
    },
    {
        name: 'Dr. Lena Ting', 
        title: 'Professor', 
        src: require('./../../../../assets/collaborators/ting.jpg')
    },
    {
        name: 'Dr. Aaron Young', 
        title: 'Associate Professor', 
        src: require('./../../../../assets/collaborators/aaron.jpg')
    },

]


function CS8750() {

    return (
            <div className="cs8750-container">
                <div className='irim-title-block'>
                    <h1>Welcome IRIM 2024!</h1>
                </div>
                
                <Button name="View Poster" href={POSTER} target="_blank"/>

                <div className="irim-logo-container">
                    <img src={IRIMLOGO} alt='ASB Logo'/>
                </div>  

                <div className="cs8750-collaborators-container">
                    <h2>Advisors</h2>
                    <div className='cs8750-collaborators-images'>
                        {COLLABORATORS.map((collaborator, index) => (
                            <div className='cs8750-collaborator' key={index}>
                                <img src={collaborator.src} key={index} alt={collaborator.name}/>
                                <div className='cs8750-collabrator-titleblock'>
                                    <h3>{collaborator.name}</h3>
                                    <span className='cs8750-collaborator-occupation'>{collaborator.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  

            </div>
    )
}

export default CS8750
