import React from 'react';
import './FAQ.css';

class FAQ extends React.Component {
    getTitle() {
        return window.screen.width <= 680 ? "Q&A" : "Questions & Answers";
    }
    
    render() {
        return(
            <div className="faq-container parallax">
                <h1>{this.getTitle()}</h1>
                <div className="accordion">
                    <div className="accordion-wrapper" id="question1">
                        <a className="accordion-link" href="#question1">
                            Why did you decide to pursue a Mechanical Engineering and Computer Engineering dual degree?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                UF did not offer a robotics program, so this was my attempt at designing my own. I thought it was 
                                incredibly useful to learn both disciplines, and would encourage anyone interested in regularlyobotics to
                                do the same. 
                                <br/>
                                <br/>
                                As a quick disclaimer, I sometimes wish I had more time during undergrad to explore some other
                                passions outside of school. I struggled in part due to my self-imposed four-year graduation
                                timeline. I would encourage anyone to consider a five-year timeline. An alternative is also to take
                                robotics courses as electives. I recommend the following foundational classes: (1) Controls, (2) Microprocessor 
                                Applications, (3) Intro to Object Oriented Programming, (4) Design and Manufacturing, and (5) Machine Learning 
                                / Artificial Intelligence.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-wrapper" id="question2">
                        <a className="accordion-link" href="#question2">
                            Outside of classes and extracurriculars, what do you do for fun?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                I am extremely passionate about music, in part because I have been a drummer since I was 8. I am currently getting into aviation 
                                and am currently working towards a private pilot licnse. I also enjoy playing and watching basketball, going rock climbing, biking, 
                                longboarding, and weightlifting regularly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ
