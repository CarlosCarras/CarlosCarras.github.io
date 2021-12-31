import React from 'react';
import './FAQ.css';

class FAQ extends React.Component {
    getTitle() {
        return window.screen.width <= 680 ? "FAQ" : "Frequently Asked Questions";
    }
    
    render() {
        return(
            <div className="faq-container parallax">
                <h1>{this.getTitle()}</h1>
                <div className="accordion">
                    <div className="accordion-item" id="question1">
                        <a className="accordion-link" href="#question1">
                            Why did you decide to pursue a Mechanical Engineering and Computer Engineering dual degree?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                UF did not offer a robotics program, so this was my attempt at designing my own. I thought it was 
                                incredibly useful to learn both disciplines, and would encourage anyone interested in Robotics to
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
                    <div className="accordion-item" id="question2">
                        <a className="accordion-link" href="#question2">
                            Outside of classes and extracurriculars, what do you do for fun?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                I am extremely passionate about music, in part because I have been a drummer since I was 8. I also enjoy playing 
                                and watching basketball, going rock climbing, bike, longboarding, and weightlifting regularly. I'm starting to get
                                into playing volleyball and tennis, so let me know if you live in the Atlanta area and have some spare time!
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item" id="question3">
                        <a className="accordion-link" href="#question3">
                            What is your favorite general-purpose programming language?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                TLDR; Python.
                                <br/>
                                <br/>
                                If you visited this website before 2022, you may have noticed that my previous answer was MATLAB. 
                                Any while MATLAB remains my favorite for RandD, it falls short in two fronts: (1) the Object-Oriented 
                                structure, and (2) the IDE. Python does most things that MATLAB can do, and has particularly friendly 
                                OOP conventions. It is also entirely open-source, and supports the most common ML libraries.
                                <br/>
                                <br/>
                                My fondness of Python is also particularly surprising- I generally prefer strongly-typed languages 
                                like C/C++, but I have yet to run into any substantial typing bugs using Python. If this happens, I 
                                may revisit this answer and declare C++ as my favorite.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ
