import React from 'react';
import ReactTooltip from 'react-tooltip';
import './ResumeContent.css'

function ResumeContent() {
    return (
        <div className="paper-content">
            <div className="header">
                <h1 className="name tnr">Carlos Carrasquillo</h1>
                <div className="entry">
                    <h2 className="info-content tnr">Phone: (787) 668-8096</h2>
                    <div className="dotted-bullet"></div>
                    <h2 className="info-content tnr">Email: ccarrasquillo3@gatech.edu</h2>
                    <div className="dotted-bullet"></div>
                    <h2 className="info-content tnr">Domain: http://www.carloscarras.tech</h2>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Education &nbsp;
                    <span data-tip data-for='education-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='education-info' type='info' effect='solid' place={'right'}>
                        <span>Highest level of education desired = PhD in Mechanical Engineering.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>

                <div className="section-content">
                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Georgia Institute of Technology
                            <span className="normal-text font-size-1pt1em tnr"> 
                                &nbsp;&nbsp;|&nbsp; GPA: 4.00/4.00
                            </span>
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Aug 2021 - Present
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">Doctor of Philosophy,&nbsp;
                            <span className="italic-text tnr">Robotics</span>
                        </li>
                        <div className="entry-date bold-text tnr">Expected May 2026</div>
                    </div>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">Minor,&nbsp;
                            <span className="italic-text tnr">Control of Autonomous Robots</span>
                        </li>
                        <div className="entry-date bold-text tnr">Expected May 2026</div>
                    </div>
                    <br/>
                </div>

                <div className="section-content">
                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            University of Florida
                            <span className="normal-text font-size-1pt1em tnr"> 
                                &nbsp;&nbsp;|&nbsp; GPA: 3.68/4.00
                            </span>
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Aug 2017 - May 2021
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">Bachelor of Science,&nbsp;
                            <span className="italic-text tnr">Mechanical Engineering,&nbsp;</span>
                            Magna Cum Laude Honors
                        </li>
                        <div className="entry-date bold-text tnr">May 2021</div>
                    </div>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">Bachelor of Science,&nbsp;
                            <span className="italic-text tnr">Computer Engineering,&nbsp;</span>
                            Magna Cum Laude Honors
                        </li>
                        <div className="entry-date bold-text tnr">May 2021</div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Relevant Graduate Coursework &nbsp;
                    <span data-tip data-for='coursework-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='coursework-info' delayHide={500} type='info' effect='solid' place={'right'}>
                        <span>For the undergraduate coursework, click <a href="./FourYearPlan" style={{color:"white"}}>here</a>.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr"></div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Aug 2017 - Present
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="course-list-ul entry">
                            <span className="resume-text">
                                <li className="tnr">CS6601: Artificial Intelligence</li>
                                <li className="tnr">ME7785: Introduction to Robotics</li>
                            </span>
                        </div>
                        <div className="course-list-ul">
                            <span className="resume-text">
                                {/* <li className="tnr">ME7785: Introduction to Robotics</li> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Experience &nbsp;
                    <span data-tip data-for='experience-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='experience-info' type='info' effect='solid' place={'right'}>
                        <span>For more specific project information, see the 'Gallery' tab.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Computer Science / Mechanical Engineering Intern
                            <span className="normal-text font-size-1em tnr"> 
                                &nbsp;&nbsp;|&nbsp; Raytheon Intelligence and Space
                            </span>
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            May 2019 - Present
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">
                            Developed a robust and comprehensive web application to find components on a PCB by search and mouseover. The web app was developed using the MERN stack.
                        </li>
                        <li className="entry-name tnr">
                            Created five Splunk dashboards and ~10 process programs for production machinery.
                        </li>
                        <li className="entry-name tnr">
                            Wrote a desktop application to log and track material tests using VBA.
                        </li>
                    </div>
                    <br/>


                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Undergraduate Research Assistant
                            <span className="normal-text font-size-1em tnr"> 
                                &nbsp;&nbsp;|&nbsp; ADvanced Autonomous MUltiple Spacecraft Lab
                            </span>
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Jan 2019 - Aug 2021
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">
                            Wrote custom C++ libraries for the D3 CubeSat’s IMU, antenna, radio, and GPS avionics. All code runs on a BeagleBone Black.
                        </li>
                        <li className="entry-name tnr">
                            Developed a C++ onboard radio framework to enable data uplink/downlink and implemented command + data handling logic.
                        </li>
                        <li className="entry-name tnr">
                            Created a ground station Python application to transmit telecommands and receive downlinked data.
                        </li>
                        <li className="entry-name tnr">
                            Wrote the finite state machine for the CubeSat that uses ROS to switch between states.
                        </li>
                        <li className="entry-name tnr">
                            Designed a website for the D3 CubeSat using the MERN stack.
                        </li>
                    </div>
                    <br/>

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Undergraduate Teaching Assistant
                            <span className="normal-text font-size-1em tnr"> 
                                &nbsp;&nbsp;|&nbsp; University of Florida MAE Department 
                            </span>
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            May 2019 - May 2021
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Dynamics and Controls Lab: </span>
                            Led 6 lab sessions to assist students with LabVIEW programming and controller design.
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Thermal Systems and Design Lab: </span>
                            Taught ~70 students about the principles of IC engines in lectures, office hours, and exam reviews.
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Design and Manufacturing Lab: </span>
                            Taught students to design robots in SOLIDWORKS and build them using machine shop equipment.
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Numerical Methods: </span>
                            Held lectures, office hours, and exam reviews; wrote the homework solutions in MATLAB.
                        </li>
                    </div>
                    <br/>

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Lowe’s Associate in the Paint Department
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Apr 2018 – Aug 2018
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">
                            Handled inventory, gave DIY recommendations, mixed paint, assisted fellow associates in hardware.
                        </li>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Student Organization Participation</div>
                <div className="divider-line"></div>
                <div className="section-content">

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            SwampHacks VI Infinite Energy's Best Hack Award Recipient
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Jan 2020
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">
                            Won award at a hackathon hosted by UF for proposing a solution to the problems with current hurricane relief efforts.
                        </li>
                        <li className="entry-name tnr">
                            Idea: Utilize a city’s topology map, storm surge data, boat draft, and capacity to map the most accessible path (by boat) to a victim.
                        </li>
                    </div>
                    <br/>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Publications</div>
                <div className="divider-line"></div>
                <div className="section-content">

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            A Versatile and Open-Source Radio Framework for the D3 CubeSat Mission
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Jul 2021
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">
                            Honorable Mention in the 2021 SmallSat Conference Frank J. Redd Student Competition
                        </li>
                        <li className="entry-name tnr">
                            Source: https://digitalcommons.usu.edu/smallsat/2021/all2021/269/
                        </li>
                    </div>
                    <br/>

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                        A Novel Approach to CubeSat Flight Software Development Using Robot Operating System (ROS)
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            Jul 2020
                        </div>
                    </div>
                    <br/>
                    <div className="entry course-list-ul">
                        <li className="entry-name tnr">
                            2020 SmallSat Conference 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className="entry-name tnr">
                            Source: https://digitalcommons.usu.edu/smallsat/2020/all2020/241/
                        </li>
                    </div>
                    <br/>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Skills &nbsp;
                    <span data-tip data-for='skill-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='skill-info' type='info' effect='solid' place={'right'}>
                        <span>Hover over a skill to view the level of expertise.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="course-list-ul">
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Programming</span>: &nbsp;
                                {/* C */}
                                <span data-tip data-for='c-info'><span className="tnr">C,&nbsp;</span></span>
                                <ReactTooltip id='c-info' type='info' effect='solid' place={'top'}>4 years</ReactTooltip>
                                {/* C++ */}
                                <span data-tip data-for='c++-info'><span className="tnr">C++,&nbsp;</span></span>
                                <ReactTooltip id='c++-info' type='info' effect='solid' place={'top'}>4 years</ReactTooltip>
                                {/* Python */}
                                <span data-tip data-for='python-info'><span className="tnr">Python,&nbsp;</span></span>
                                <ReactTooltip id='python-info' type='info' effect='solid' place={'top'}>4 years</ReactTooltip>
                                {/* MATLAB */}
                                <span data-tip data-for='matlab-info'><span className="tnr">MATLAB,&nbsp;</span></span>
                                <ReactTooltip id='matlab-info' type='info' effect='solid' place={'top'}>4 years</ReactTooltip>
                                {/* Bash */}
                                <span data-tip data-for='bash-info'><span className="tnr">Bash,&nbsp;</span></span>
                                <ReactTooltip id='bash-info' type='info' effect='solid' place={'top'}>2 years</ReactTooltip>
                                {/* Java */}
                                <span data-tip data-for='java-info'><span className="tnr">Java,&nbsp;</span></span>
                                <ReactTooltip id='java-info' type='info' effect='solid' place={'top'}>2 years</ReactTooltip>
                                {/* Javascript */}
                                <span data-tip data-for='javascript-info'><span className="tnr">Javascript,&nbsp;</span></span>
                                <ReactTooltip id='javascript-info' type='info' effect='solid' place={'top'}>2 years</ReactTooltip>
                                {/* LabVIEW */}
                                <span data-tip data-for='labview-info'><span className="tnr">LabVIEW,&nbsp;</span></span>
                                <ReactTooltip id='labview-info' type='info' effect='solid' place={'top'}>1.5 years</ReactTooltip>
                                {/* VBA */}
                                <span data-tip data-for='vba-info'><span className="tnr">VBA</span></span>
                                <ReactTooltip id='vba-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                        </li>
                        <li>
                            <span className="italic-text tnr">Frameworks</span>: &nbsp;
                                {/* ROS */}
                                <span data-tip data-for='ros-info'><span className="tnr">ROS,&nbsp;</span></span>
                                <ReactTooltip id='ros-info' type='info' effect='solid' place={'top'}>2.5 years</ReactTooltip>
                                {/* MERN */}
                                <span data-tip data-for='mern-info'><span className="tnr">MERN Stack</span></span>
                                <ReactTooltip id='mern-info' type='info' effect='solid' place={'top'}>2.5 years</ReactTooltip>
                        </li>
                        <li>
                            <span className="italic-text tnr">Other</span>: &nbsp;
                                {/* Linux */}
                                <span data-tip data-for='linux-info'><span className="tnr">Linux,&nbsp;</span></span>
                                <ReactTooltip id='linux-info' type='info' effect='solid' place={'top'}>4 years</ReactTooltip>
                                {/* Altium */}
                                <span data-tip data-for='altium-info'><span className="tnr">Altium Designer,&nbsp;</span></span>
                                <ReactTooltip id='altium-info' type='info' effect='solid' place={'top'}>2 years</ReactTooltip>
                                {/* LaTeX */}
                                <span data-tip data-for='latex-info'><span className="tnr">LaTeX,&nbsp;</span></span>
                                <ReactTooltip id='latex-info' type='info' effect='solid' place={'top'}>1 year</ReactTooltip>
                                {/* LTSpice */}
                                <span data-tip data-for='ltspice-info'><span className="tnr">LTSpice,&nbsp;</span></span>
                                <ReactTooltip id='ltspice-info' type='info' effect='solid' place={'top'}>1 year</ReactTooltip>
                                {/* VHDL */}
                                <span data-tip data-for='vhdl-info'><span className="tnr">VHDL</span></span>
                                <ReactTooltip id='vhdl-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">CAD/FEA</span>: &nbsp;
                                {/* SolidWorks */}
                                <span data-tip data-for='solidworks-info'><span className="tnr">SolidWorks,&nbsp;</span></span>
                                <ReactTooltip id='solidworks-info' type='info' effect='solid' place={'top'}>5 years</ReactTooltip>
                                {/* Fusion 360 */}
                                <span data-tip data-for='fusion-360-info'><span className="tnr">Fusion 360,&nbsp;</span></span>
                                <ReactTooltip id='fusion-360-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                                {/* Inventor */}
                                <span data-tip data-for='inventor-info'><span className="tnr">Inventor</span></span>
                                <ReactTooltip id='inventor-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Certifications</span>: &nbsp;
                                {/* SolidWorks Certification */}
                                <span data-tip data-for='solidworks-certification-info'><span className="tnr">SolidWorks,&nbsp;</span></span>
                                <ReactTooltip id='solidworks-certification-info' type='info' effect='solid' place={'top'}>Associate</ReactTooltip>
                                {/* Amateur Radio Certification */}
                                <span data-tip data-for='amateur-radio-info'><span className="tnr">Amateur Radio (KN4ZUC),&nbsp;</span></span>
                                <ReactTooltip id='amateur-radio-info' type='info' effect='solid' place={'top'}>Technician</ReactTooltip>
                                {/* Nvidia Computer Vision Certification */}
                                <span data-tip data-for='nvidia-info'><span className="tnr">Nvidia Computer Vision</span></span>
                                <ReactTooltip id='nvidia-info' type='info' effect='solid' place={'top'}>Certificate of Competency</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Personal Projects</span>: &nbsp;
                            12-DOF Quadruped Robot, 3D Bioprinter, Desktop Lathe, MIPS CPU, Personal Website, Watercooled PC Build
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Languages</span>: &nbsp;
                                {/* English */}
                                <span data-tip data-for='english-info'><span className="tnr">English,&nbsp;</span></span>
                                <ReactTooltip id='english-info' type='info' effect='solid' place={'top'}>Fluent</ReactTooltip>
                                {/* Spanish */}
                                <span data-tip data-for='spanish-info'><span className="tnr">Spanish</span></span>
                                <ReactTooltip id='spanish-info' type='info' effect='solid' place={'top'}>Fluent</ReactTooltip>
                        </li>
                    </div>
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default ResumeContent;
