import React from 'react';
import ResumePage from './ResumePage';
import './Resume.css';

import Button from '../../components/Button/Button';

const RESUME = require('./../../assets/resume.pdf'),
      CV = require('./../../assets/cv.pdf');

function Resume() {
    return (
        <div className="resume-view-container">
            <div className='resume-button-container'>
                <Button name="Download Resume" href={RESUME} newtab={true}/>
                <Button name="Download CV" href={CV} newtab={true}/>
                <Button name="View Coursework" href={"/coursework"} newtab={false}/>
            </div>
            <ResumePage/>
        </div>
    )
}

export default Resume;
