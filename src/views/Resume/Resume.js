import React from 'react';
import ResumePage from './ResumePage';
import './Resume.css';

import Button from '../../components/Button/Button';

const RESUME = require('./../../assets/resume.pdf'),
      CV = require('./../../assets/curriculum_vitae.pdf');

function Resume() {
    return (
        <div className="resume-view-container">
            <div className='button-group-container'>
                <Button name="Download Resume" href={RESUME} newtab={true}/>
                <Button name="Download CV" href={CV} newtab={true}/>
                <Button name="View Research" href={"/research"} newtab={false}/>
                <Button name="View Coursework" href={"/coursework"} newtab={false}/>
            </div>
            <ResumePage/>
        </div>
    )
}

export default Resume;
