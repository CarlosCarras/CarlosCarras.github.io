import React from 'react';
import './ResumePage.css'

const NAME = "Carlos Carrasquillo", 
      PHONE = "(787) 668-8096",
      EMAIL = "ccarrasquillo3@gatech.edu",
      DOMAIN = "http://www.carloscarras.tech";

const SKILLS = [
    { 
        category: "CAD", 
        contents: [
            {name: "SolidWorks (CAD/FEA)", years: 5},
            {name: "Fusion 360 (CAD/CAM)", years: 5},
            {name: "Autodesk Inventor (CAD)", years: 5},
        ]
    }, 
    { 
        category: "Programming", 
        contents: [
            {name: "C/C++", years: 5},
            {name: "Java", years: 5},
            {name: "JavaScript", years: 5},
            {name: "LabVIEW", years: 5},
            {name: "MATLAB", years: 5},
            {name: "Python", years: 5},
            {name: "Simulink", years: 5},
            {name: "VBA", years: 5},
            {name: "VHDL", years: 5},
        ]
    },
    { 
        category: "Technical Software", 
        contents: [
            {name: "Altium Designer", years: 5},
            {name: "LaTeX", years: 5},
            {name: "Linux", years: 5},
            {name: "LTSpice", years: 5},
            {name: "MERN Stack", years: 5},
            {name: "OpenMDAO", years: 5},
            {name: "OpenSim", years: 5},
            {name: "ROS", years: 5},
            {name: "Splunk", years: 5},
            {name: "SPSS", years: 1},
            {name: "Unity", years: 5},
            {name: "Vicon", years: 5},
        ]
    },
    { 
        category: "Technical Hardware", 
        contents: [
            {name: "Shop (Lathes, Mills, Waterjets, Welding, etc.)", years: 5},
            {name: "Electronics (oscilloscopes, microscopes, etc.)", years: 5},
            {name: "3D Printing", years: 5},
        ]
    },
    { 
        category: "Certifications", 
        contents: [
            {name: "Student Pilot", years: 5},
            {name: "Amateur Radio Technician (KN4ZUC)", years: 5},
            {name: "Nvidia Computer Vision Certificate", years: 5},
            {name: "SOLIDWORKS Associate", years: 5},
        ]
    },
    { 
        category: "Personal Projects", 
        contents: [
            {name: "Student Pilot", years: 5},
            {name: "Amateur Radio Technician (KN4ZUC)", years: 5},
            {name: "SOLIDWORKS Associate", years: 5},
        ]
    },
    { 
        category: "Languages", 
        contents: [
            {name: "English", years: 5},
            {name: "Spanish", years: 5},
        ]
    }
]


function ResumeContent() {
    return (
        <div className="resume-page">
            <div>
                <h1 className="name">{NAME}</h1>
                <div className="contact-info">
                    Phone: {PHONE}
                    <div className="dotted-bullet"></div>
                    Email: {EMAIL}
                    <div className="dotted-bullet"></div>
                    Domain: {DOMAIN}
                    <div className="dotted-bullet"></div>
                    US Citizen
                </div>
            </div>

            <div className="section">
                <div className="section-header">Education &nbsp;</div>
                <div className="divider-line"></div>

                {/* Georgia Institute of Technology */}
                <div className="section-content">
                    <div className="resume-entry entry-title">
                        <div>
                            Georgia Institute of Technology
                            <span> &nbsp;&nbsp;|&nbsp; GPA: 4.00/4.00 </span>
                        </div>
                        <div>Aug 2021 - Present</div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>PhD, <em>Robotics</em></div>
                        <div>Expected May 2026</div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>MS, <em>Computer Science, </em> Machine Learning Specialization</div>
                        <div>Expected May 2025</div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>MS, <em>Aerospace Engineering</em> </div>
                        <div>Expected May 2025</div>
                    </div>
                </div>

                {/* University of Florida */}
                <div className="section-content">
                    <div className="resume-entry entry-title">
                        <div>
                            University of Florida
                            <span> &nbsp;&nbsp;|&nbsp; GPA: 3.68/4.00 </span>
                        </div>
                        <div>Aug 2017 - May 2021</div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>BS, <em>Mechanical Engineering</em>, Magna Cum Laude Honors</div>
                        <div>May 2021</div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>BS, <em>Computer Engineering</em>, Magna Cum Laude Honors</div>
                        <div>May 2021</div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header">Experience </div>
                <div className="divider-line"></div>

                {/* Georgia Tech */}
                <div className="section-content">
                    <div className="resume-entry entry-title">
                        <div>
                            Graduate Research Assistant
                            <span> &nbsp;&nbsp;|&nbsp; Georgia Institute of Technology, IRIM </span>
                        </div>
                        <div> August 2021 - Present </div>
                    </div>
                    <div className='resume-entry-supplement'>
                        <em>Advisors</em>: Anirban Mazumdar, PhD, Aaron Young, PhD
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Generalized Exoskeleton Control</em>: Creating a metabolically optimal exoskeleton torque controller that generalizes across tasks.
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Exoskeleton Navigation</em> Designed exoskeleton controller to help humans avoid obstacles in low visibility environments [J2], [C3].
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Classical Exoskeleton Control</em>: Designed hip exoskeleton impedance controllers for everyday tasks. Validated using metabolics [J1].
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Mechatronics</em>: Developed software libraries and PCBs to interface with exoskeleton motor controllers, sensors, and master computer.
                        </div>
                    </div>
                    <br/>

                    {/* Raytheon */}
                    <div className="resume-entry entry-title">
                        <div>
                            Computer Science / Mechanical Engineering Intern
                            <span> &nbsp;&nbsp;|&nbsp; Raytheon Intelligence and Space </span>
                        </div>
                        <div> May 2021 - May 2022 </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Web App Development</em>: Fully developed a web application to find components on a PCB by search and mouseover. MERN Stack.
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Database Management</em>: Created five Splunk dashboards and ~10 process programs for production-grade machinery.
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Local App Development</em>: Wrote a desktop application to log and track material tests using VBA.
                        </div>
                    </div>
                    <br/>

                    {/* ADAMUS */}
                    <div className="resume-entry entry-title">
                        <div>
                            Undergraduate Research Assistant
                            <span> &nbsp;&nbsp;|&nbsp; ADvanced Autonomous MUltiple Spacecraft Lab </span>
                        </div>
                        <div> Jan 2019 - Aug 2021 </div>
                    </div>
                    <div className='resume-entry-supplement'>
                        <em>Advisor</em>: Riccardo Bevilacqua, PhD
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Embedded Programming</em>: Wrote custom C++ libraries for the D3 CubeSat’s IMU, antenna, radio, and GPS aboard a BeagleBone [C1].
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                           <em>OS Design</em>: Developed a C++ radio framework to enable data uplink/downlink and implemented command & data handling logic [C2].
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Mission Operations</em>: Created a ground station Python application to transmit telecommands and receive downlinked data.
                        </div>
                    </div>
                    <br/>

                    {/* University of Florida */}
                    <div className="resume-entry entry-title">
                        <div>
                            Undergraduate Teaching Assistant
                            <span> &nbsp;&nbsp;|&nbsp; University of Florida MAE Department  </span>
                        </div>
                        <div> May 2019 - May 2021 </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Dynamics and Controls Lab</em>: 
                            Led 6 lab sessions to assist students with LabVIEW programming and controller design.
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Thermal Systems and Design Lab</em>: 
                            Taught ~70 students about the principles of IC engines in lectures, office hours, and exam reviews.
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Design and Manufacturing Lab</em>: 
                            Taught students to design robots in SOLIDWORKS and build them using machine shop equipment.
                        </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>
                            <em>Numerical Methods</em>: 
                            Held lectures, office hours, and exam reviews; wrote the homework solutions in MATLAB.
                        </div>
                    </div>
                    <br/>

                    {/* Lowe's */}
                    <div className="resume-entry entry-title">
                        <div>
                            Paint Department Associate
                            <span> &nbsp;&nbsp;|&nbsp; Lowe's </span>
                        </div>
                        <div> Apr 2018 – Aug 2018 </div>
                    </div>
                    <div className="resume-entry resume-bullet">
                        <div>Handled inventory, gave DIY recommendations, mixed paint, assisted fellow associates in hardware.</div>
                    </div>
                    <br/>

                </div>
            </div>

            <div className="section">
                <div className="section-header">Awards</div>
                <div className="divider-line"></div>
                <div className="section-content">

                    {/* Grad REACH */}
                    <div className="resume-entry entry-title">
                        <div>
                        GT Grad REACH Fellow and Mentor
                        </div>
                        <div>Aug 2024 – Current</div>
                    </div>

                    {/* Pathbreakers */}
                    <div className="resume-entry entry-title">
                        <div>
                            GT Pathbreakers Fellow
                        </div>
                        <div>Aug 2023 – Current</div>
                    </div>

                    {/* NDSEG */}
                    <div className="resume-entry entry-title">
                        <div>
                            National Defense Science and Engineering Graduate (NDSEG) Fellow
                        </div>
                        <div>Aug 2022 – Current</div>
                    </div>

                    {/* UCEM */}
                    <div className="resume-entry entry-title">
                        <div>
                            University Center of Exemplary Mentoring (UCEM) Fellow
                        </div>
                        <div>Aug 2023 – Aug 2024</div>
                    </div>

                    {/* SmallSat Best Paper Honorable Mention */}
                    <div className="resume-entry entry-title">
                        <div>
                            SmallSat 2021 Student Competition Best Paper Honorable Mention
                        </div>
                        <div>July 2021</div>
                    </div>

                    {/* Florida Academic Scholars */}
                    <div className="resume-entry entry-title">
                        <div>
                            Florida Academic Scholars Award
                        </div>
                        <div>Aug 2017 – May 2021</div>
                    </div>

                    {/* SwampHacks */}
                    <div className="resume-entry entry-title">
                        <div>
                            SwampHacks VI Infinite Energy's Best Hack Award Recipient
                        </div>
                        <div>Jan 2020</div>
                    </div>

                </div>
                
            </div>

            <div className="section">
                <div className="section-header">Journal Papers</div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <ol className='reference-list'>
                        <li>
                            <span className='reference-number'>[J3]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>,
                                C. Carrasquillo, S. Zhou, K. Collins, W. Lee Childers, A. Young, A. Mazumdar. “A Clinical Decision-Making Algorithm for the Personalized Prescription of Prosthetic Microprocessor-Controlled Knees: An Evidence-Based Approach based on a Randomized Trial”. Prosthetics and Orthotics International. 2024. (In Prep)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J2]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>,
                                A. Bajpai, D. Iyengar, K. Collins, A. Mazumdar, A. Young. “Enhancing Human Navigation Ability Using Force-Feedback from a Lower-Limb Exoskeleton”. IEEE Transactions on Haptics. 2024. (Submitted)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J1]</span>
                            <div>
                                A. Bajpai,&nbsp;
                                <span className='author-callout'>C. Carrasquillo</span>,
                                J. Carlson, J. Park, D. Iyengar, K. Herrin, A. Young, A. Mazumdar. “Design and Validation of a Versatile High Torque Quasi‐Direct Drive Hip Exoskeleton”. IEEE Transactions on Mechatronics. 2023.
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="section">
                <div className="section-header">Conference Papers</div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <ol className='reference-list'>
                        <li>
                            <span className='reference-number'>[C3]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>,&nbsp;
                                A. Young, A. Mazumdar. “Intuitive Steering Assistance from a Wearable Robotic Assistive System for Visually Impaired Navigation”. IEEE International Conference on Robotics and Automation. 2025. (Submitted)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[C2]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>.&nbsp;
                                “A Versatile and Open-Source Radio Framework for the D3 CubeSat Mission”. Small Satellite Conference. 2021.
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[C1]</span>
                            <div>
                                S. Buckner,&nbsp;
                                <span className='author-callout'>C. Carrasquillo</span>, 
                                M. Elosegui, R. Bevilacqua. “A Novel Approach to CubeSat Flight Software Development Using Robot Operating System (ROS)”. Small Satellite Conference. 2021.
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

            {/* Skills Map */}
            <div className="section">
                <div className="section-header">Skills &nbsp;</div>
                <div className="divider-line"></div>
                <div className="section-content">
                    {
                        SKILLS.map((data, i) => (
                                <div className='resume-entry resume-bullet skill-list' key={i}>
                                    <div>{data.category}:&nbsp;&nbsp;</div>
                                    {
                                        data.contents.map((entry, j) => (
                                            <span key={j}>
                                                {entry.name}
                                                {j !== data.contents.length - 1 && ","}
                                                &nbsp;
                                            </span>
                                        ))
                                    }
                                </div>
                            )
                        )
                    }
                    <br/>
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default ResumeContent;
