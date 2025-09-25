import React from 'react';
import './ResumePage.css'

const NAME = "Carlos A. Carrasquillo Torres", 
      PHONE = "(787) 668-8096",
      EMAIL = "ccarrasquillo3@gatech.edu",
      DOMAIN = "http://www.carloscarras.tech";

const SKILLS = [
    { 
        category: "Design & Manufacturing", 
        contents: [
            {name: "Altium Designer (PCB)", years: 5},
            {name: "SolidWorks (CAD/FEA)", years: 5},
            {name: "Fusion 360 (CAD/CAM)", years: 5},
            {name: "Machine Shop Equipment (Lathes, Mills, CNC, Welding)", years: 5},
            {name: "Rapid Prototyping", years: 5},
        ]
    }, 
    { 
        category: "Programming", 
        contents: [
            {name: "Python (NumPy, Pandas, OpenCV, PyTorch, TensorFlow, ROS, OpenMDAO)", years: 5},
            {name: "C/C++", years: 5},
            {name: "C# (Unity)", years: 5},
            {name: "JavaScript (React.js)", years: 5},
            {name: "MATLAB", years: 5},
            {name: "Simulink", years: 5},
            {name: "VBA", years: 5},
            {name: "VHDL", years: 5},
        ]
    },
    { 
        category: "Experimentation", 
        contents: [
            {name: "AR/VR", years: 5},
            {name: "Electromyography", years: 5},
            {name: "Metabolics (COSMED, Parvo)", years: 5},
            {name: "Motion Capture (Vicon)", years: 5},
            {name: "OpenSim", years: 5},
        ]
    },
    { 
        category: "Certifications", 
        contents: [
            {name: "Amateur Radio Technician (KN4ZUC)", years: 5},
            {name: "SOLIDWORKS Associate", years: 5},
            {name: "Private Pilot (90+ hours)", years: 5},
            {name: "Adv. Open Water Diver", years: 5},
        ]
    },
    { 
        category: "Personal Projects", 
        contents: [
            {name: "12-DOF quadruped robot", years: 5},
            {name: "3D bioprinter", years: 5},
            {name: "desktop lathe", years: 5},
            {name: "MIPS CPU", years: 5},
            {name: "5+ websites", years: 5},
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

                <div className="section-content">
                    
                    {/* Georgia Institute of Technology */}
                    <div className="subsection-content">
                        <div className="resume-entry entry-title">
                            <div>
                                Georgia Institute of Technology
                                <span> &nbsp;&nbsp;|&nbsp; GPA: 3.9/4.0 </span>
                            </div>
                            <div>Aug 2021 - Present</div>
                        </div>
                        <ul className="resume-list">
                            <li>
                                <div className="li-content">
                                    <div>PhD, <em>Robotics</em></div>
                                    <div>Expected May 2026</div>
                                </div>
                            </li>
                            <li>
                                <div className="li-content">
                                    <div>MS, <em>Computer Science, </em> Machine Learning Specialization</div>
                                    <div>May 2025</div>
                                </div>
                            </li>
                            <li>
                                <div className="li-content">
                                    <div>MS, <em>Aerospace Engineering</em> </div>
                                    <div>May 2025</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* University of Florida */}
                    <div className="subsection-content">
                        <div className="resume-entry entry-title">
                            <div>
                                University of Florida
                                <span> &nbsp;&nbsp;|&nbsp; GPA: 3.7/4.0 </span>
                            </div>
                            <div>Aug 2017 - May 2021</div>
                        </div>
                        <ul className="resume-list">
                            <li>
                                <div className='li-content'>
                                    <div>BS, <em>Mechanical Engineering</em>, Magna Cum Laude Honors</div>
                                    <div>May 2021</div>
                                </div>
                            </li>
                            <li>
                                <div className='li-content'>
                                    <div>BS, <em>Computer Engineering</em>, Magna Cum Laude Honors</div>
                                    <div>May 2021</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="section">
                <div className="section-header">Experience </div>
                <div className="divider-line"></div>

                <div className="section-content">

                    {/* Georgia Institute of Technology */}
                    <div className="subsection-content">
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
                        <ul className="resume-list">
                            <li>
                                Developed exoskeleton hardware and optimal learning-based controllers for human navigation, mobility, and injury reduction.
                            </li>
                            <li>
                                Performed human-subject experiments to validate exoskeleton hardware and controllers. 
                            </li>
                        </ul>
                    </div>

                    {/* Raytheon */}
                    <div className="subsection-content">
                        <div className="resume-entry entry-title">
                            <div>
                                Intern
                                <span> &nbsp;&nbsp;|&nbsp; Raytheon Intelligence and Space </span>
                            </div>
                            <div> May 2021 - May 2022 </div>
                        </div>
                        <ul className="resume-list">
                            <li>
                                Developed a MERN stack web application to help engineers find components on printed circuit boards by search and mouseover. 
                            </li>
                            <li>
                                Engineered a VBA-based desktop application to automate the logging and tracking of material testing data, replacing a manual process.
                            </li>
                        </ul>
                    </div>

                    {/* ADAMUS */}
                    <div className="subsection-content">
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
                        <ul className="resume-list">
                            <li>
                                Developed embedded C++ avionics software for the D3 CubeSat, creating custom libraries to interface with the satellite's sensors [C1, C2].
                            </li>
                            <li>
                                Engineered a ground station application in Python to transmit telecommands and receiving downlinked data from the satellite.
                            </li>
                        </ul>
                    </div>

                    {/* University of Florida */}
                    <div className="subsection-content">
                        <div className="resume-entry entry-title">
                            <div>
                                Undergraduate Teaching Assistant
                                <span> &nbsp;&nbsp;|&nbsp; University of Florida MAE Department  </span>
                            </div>
                            <div> May 2019 - May 2021 </div>
                        </div>
                        <ul className="resume-list">
                            <li>
                                <em>Design and Manufacturing Lab (6 semesters)</em>: 
                                Taught &gt;30 students on design for manufacturing principles and usage of machine shop equipment.
                            </li>
                            <li>
                                <em>Dynamics and Controls Lab (1 semester)</em>: 
                                Lectured to &gt;50 students on applying classical control theory to real-world systems.
                            </li>
                            <li>
                                <em>Thermal Systems and Design Lab (1 semester)</em>: 
                                Guided student teams in designing models for internal combustion engines.
                            </li>
                            <li>
                                <em>Numerical Methods (2 semesters)</em>: 
                                Lectured on iterative algorithms, linear algebra, Fourier analysis and held routine office hours.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header">Awards</div>
                <div className="divider-line"></div>
                <div className="section-content">

                    {/* Grad REACH */}
                    <div className="resume-entry resume-bullet">
                        <div>
                        Grad REACH Fellow and Mentor
                        </div>
                        <div>Aug 2024 – Current</div>
                    </div>

                    {/* Pathbreakers */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            Pathbreakers Fellow (formerly University Center for Exemplary Menotring)
                        </div>
                        <div>Aug 2023 – Current</div>
                    </div>

                    {/* NDSEG */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            National Defense Science and Engineering Graduate (NDSEG) Fellow
                        </div>
                        <div>Aug 2022 – Current</div>
                    </div>

                    {/* SmallSat Best Paper Honorable Mention */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            SmallSat 2021 Student Competition Best Paper Honorable Mention
                        </div>
                        <div>July 2021</div>
                    </div>

                    {/* Florida Academic Scholars */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            Florida Academic Scholars Award
                        </div>
                        <div>Aug 2017 – May 2021</div>
                    </div>

                    {/* SwampHacks */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            SwampHacks VI Infinite Energy's Best Hack Award Recipient
                        </div>
                        <div>Jan 2020</div>
                    </div>

                </div>
                
            </div>

            <div className="section">
                <div className="section-header">Select Publications</div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <ol className='reference-list'>
                        <li>
                            <span className='reference-number'>[J4]</span>
                            <div>
                                K. L. Scherpereel, M. C. Gombolay, M. K. Shepherd, <span className='author-callout'>C. A. Carrasquillo</span>, O. T. Inan, A. J. Young. 
                                "Deep Domain Adaptation Eliminates Costly Data Required for Task-Agnostic Wearable Robotic Control". Science Robotics. 2025. (Submitted)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J3]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>,
                                A. Bajpai, D. Iyengar, K. Collins, A. Mazumdar, A. Young. 
                                “<a href="https://ieeexplore.ieee.org/abstract/document/10854900" alt="Enhancing Human Navigation Ability Using Force-Feedback from a Lower-Limb Exoskeleton" target="_blank">
                                Enhancing Human Navigation Ability Using Force-Feedback from a Lower-Limb Exoskeleton
                                </a>”. IEEE Transactions on Haptics. 2025.
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J2]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>,
                                C. Carrasquillo, S. Zhou, K. Collins, W. Lee Childers, A. Young, A. Mazumdar. “A Clinical Decision-Making Algorithm for the Personalized Prescription of Prosthetic Microprocessor-Controlled Knees: An Evidence-Based Approach based on a Randomized Trial”. Prosthetics and Orthotics International. 2024. (Submitted)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J1]</span>
                            <div>
                                A. Bajpai,&nbsp;
                                <span className='author-callout'>C. Carrasquillo</span>,
                                J. Carlson, J. Park, D. Iyengar, K. Herrin, A. Young, A. Mazumdar.
                                “<a href="https://ieeexplore.ieee.org/document/10342739" alt="Design and Validation of a Versatile High Torque Quasi‐Direct Drive Hip Exoskeleton" target="_blank"> 
                                    Design and Validation of a Versatile High Torque Quasi‐Direct Drive Hip Exoskeleton
                                </a>”. IEEE Transactions on Mechatronics. 2023.
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[C2]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>.
                                “<a href="https://digitalcommons.usu.edu/smallsat/2021/all2021/269/" alt="A Versatile and Open-Source Radio Framework for the D3 CubeSat Mission" target="_blank">
                                    A Versatile and Open-Source Radio Framework for the D3 CubeSat Mission
                                </a>”. Small Satellite Conference. 2021. Student Competition Best Paper Honorable Mention.
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[C1]</span>
                            <div>
                                S. Buckner,&nbsp;
                                <span className='author-callout'>C. Carrasquillo</span>, 
                                M. Elosegui, R. Bevilacqua. 
                                “<a href="https://digitalcommons.usu.edu/smallsat/2020/all2020/241/" alt="A Novel Approach to CubeSat Flight Software Development Using Robot Operating System (ROS)" target="_blank">
                                    A Novel Approach to CubeSat Flight Software Development Using Robot Operating System (ROS)
                                </a>”. Small Satellite Conference. 2020. Technical Poster Presentation.
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
                    <ul className="resume-list">
                        {
                            SKILLS.map((data, i) => (
                                    <li key={i}>
                                        <span><em>{data.category}:</em>&nbsp;</span>
                                        {
                                            data.contents.map((entry, j) => (
                                                <span key={j}>
                                                    {entry.name}
                                                    {j !== data.contents.length - 1 && ","}
                                                    &nbsp;
                                                </span>
                                            ))
                                        }
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <br/>

                </div>
            </div>

        </div>
    )
}

export default ResumeContent;
