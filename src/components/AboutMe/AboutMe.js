import React from "react";
import "./AboutMe.css"


const PROFILE = require('./../../assets/profile-pic.jpg')


function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="aboutme-col text">
                <p>
                    I enjoy anything and everything engineering, from <span>mechatronics</span> to <span>artificial intelligence</span> and <span>control systems theory</span>.
                </p>
                <p>
                    I am currently working on the control of <span>active wearable exoskeletons</span> for safe human operation.
                </p>
                <p>
                    Feel free to <a href='/contact'>reach out</a> if you have any questions about what I do, or even if you just want to chat!
                </p>
            </div>
            <div className="aboutme-col picture">
                <img src={PROFILE} alt="profile" draggable={false}/>
            </div>
        </div>
    )
}

export default AboutMe;