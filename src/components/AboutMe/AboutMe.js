import React from "react";
import "./AboutMe.css"


const PROFILE = require('./../../assets/profile-pic.PNG')


function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="aboutme-col text">
                <p>
                I am a <span>full-stack roboticist</span> with hands-on experience across the full lifecycle of robotic systems:
                </p>
                <ul>
                    <li><span>mechanical</span>: CAD, machining, CNC, rapid prototyping</li>
                    <li><span>mechatronics</span>: circuit and PCB design, embedded systems</li>
                    <li><span>software</span>: system architecture, real-time deployment</li>
                    <li><span>control</span>: modeling, state estimation, optimization</li>
                    <li><span>intelligence</span>: AI/ML, deep learning, planning</li>
                    <li><span>experimentation</span>: fully autonomous, human-in-the-loop</li>
                </ul>
                <p>
                    I am currently working on the control of <a href='/research'>active wearable exoskeletons</a> to improve human safety and performance outcomes.
                </p>
                <p>
                    Feel free to <a href='/contact'>reach out</a> if you have any questions, or even if you just want to chat!
                </p>
            </div>
            <div className="aboutme-col picture">
                <img src={PROFILE} alt="profile" draggable={false}/>
            </div>
        </div>
    )
}

export default AboutMe;