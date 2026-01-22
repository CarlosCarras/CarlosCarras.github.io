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
            {name: "SolidWorks (CAD,FEA)", years: 5},
            {name: "Fusion 360 (CAD/CAM)", years: 5},
            {name: "Machine Shop Equipment (Lathes, Mills, CNC, Welding)", years: 5},
            {name: "Rapid Prototyping", years: 5},
        ]
    }, 
    { 
        category: "Programming", 
        contents: [
            {name: "Python (NumPy, Pandas, OpenCV, PyTorch, TensorFlow, ROS/ROS2, OpenMDAO)", years: 5},
            {name: "C/C++", years: 5},
            {name: "C# (Unity)", years: 5},
            {name: "JavaScript (React.js, MongoDB, Express.js, Node.js)", years: 5},
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
            {name: "reinforcement learning-based aircraft landing autopilot", years: 5},
            {name: "microprocessor knee recommendation algorithm", years: 5},
            {name: "bioreactor pump controller", years: 5},
            {name: "12-degree-of-freedom quadruped robot", years: 5},
            {name: "3D bioprinter", years: 5},
            {name: "desktop lathe", years: 5},
            {name: "MIPS CPU", years: 5},
            {name: "assortment of websites", years: 5},
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
                            <span className="resume-bolded">Advisors:</span> Anirban Mazumdar, PhD; Aaron Young, PhD
                        </div>
                        <ul className="resume-list">
                            <li>
                                Applied deep learning techniques (TCNs, VAEs, CNNs, GANs, Transformers, PPO) to estimate human motion, biological
                                moments, and other physiological states.
                            </li>
                            <li>
                                Developed and validated novel exoskeleton controllers, including impedance-based, primitive-based, uncertainty-aware, and end-to-end
                                biological torque controllers.                           
                            </li>
                            <li>
                                Designed mechatronics components, including PCBs, sensor drivers, and orthoses components for several exoskeletons.
                            </li>
                            <li>
                                Built real-time exoskeleton software, including multiprocessing controller frameworks, communication packages, and GUIs.
                            </li>
                            <li>
                                Created VR/AR games in Unity to provide real-time biofeedback and simulate unstructured environments for human studies.
                            </li>
                            <li>
                                Conducted human-subject experiments using EMG, motion capture, metabolic systems, and AR/VR headsets.
                            </li>
                        </ul>
                    </div>

                    {/* RTX */}
                    <div className="subsection-content">
                        <div className="resume-entry entry-title">
                            <div>
                                Software & Mechanical Engineering Intern
                                <span> &nbsp;&nbsp;|&nbsp; RTX </span>
                            </div>
                            <div> May 2021 - Apr 2023 </div>
                        </div>
                        <ul className="resume-list">
                            <li>
                                Developed a MERN stack web application that streamlined component discovery on printed circuit boards for engineers.
                            </li>
                            <li>
                                Designed and deployed five process programs and Splunk dashboards to monitor and optimize production-grade machinery.
                            </li>
                            <li>
                                Automated a manual material testing process by building a VBA-based application, improving data logging and tracking efficiency.
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
                            <span className="resume-bolded">Advisors:</span> Riccardo Bevilacqua, PhD
                        </div>
                        <ul className="resume-list">
                            <li>
                                Developed embedded C++ avionics software for the D3 CubeSat, creating custom libraries to interface with the satellite's IMU, antenna,
                                radio, and GPS on a BeagleBone Black microcomputer.                            </li>
                            <li>
                                Developed a Python-based ground station application to manage satellite mission operations, enabling reliable telecommand transmission
                                and downlink data acquisition.
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
                                <span className="resume-bolded">Design and Manufacturing Lab (6 semesters):</span>
                                Taught &gt;30 students on design for manufacturing principles and usage of machine shop equipment.
                            </li>
                            <li>
                                <span className="resume-bolded">Dynamics and Controls Lab (1 semester)</span>: 
                                Lectured to &gt;50 students on applying classical control theory to real-world systems.
                            </li>
                            <li>
                                <span className="resume-bolded">Thermal Systems and Design Lab (1 semester)</span>: 
                                Guided student teams in designing models for internal combustion engines.
                            </li>
                            <li>
                                <span className="resume-bolded">Numerical Methods (2 semesters)</span>: 
                                Lectured on iterative algorithms, linear algebra, Fourier analysis and held routine office hours.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header">Fellowships and Awards</div>
                <div className="divider-line"></div>
                <div className="section-content">

                    {/* Grad REACH */}
                    <div className="resume-entry resume-bullet">
                        <div>
                        Grad REACH Fellow and Mentor
                        </div>
                        <span className="resume-date">Aug 2024 – Current</span>
                    </div>

                    {/* Pathbreakers */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            Pathbreakers Fellow (formerly University Center for Exemplary Menotring)
                        </div>
                        <div className="resume-date">Aug 2023 – Current</div>
                    </div>

                    {/* NDSEG */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            National Defense Science and Engineering Graduate (NDSEG) Fellow
                        </div>
                        <div className="resume-date">Aug 2022 – Current</div>
                    </div>

                    {/* SmallSat Best Paper Honorable Mention */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            SmallSat 2021 Student Competition Best Paper Honorable Mention
                        </div>
                        <div className="resume-date">July 2021</div>
                    </div>

                    {/* Florida Academic Scholars */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            Florida Academic Scholars Award
                        </div>
                        <div className="resume-date">Aug 2017 – May 2021</div>
                    </div>

                    {/* SwampHacks */}
                    <div className="resume-entry resume-bullet">
                        <div>
                            SwampHacks VI Infinite Energy's Best Hack Award Recipient
                        </div>
                        <div className="resume-date">Jan 2020</div>
                    </div>

                </div>
                
            </div>

            <div className="section">
                <div className="section-header">Select Publications</div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <ol className='reference-list'>
                        <li>
                            <span className='reference-number'>[J10]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>, A. Mazumdar, A. Young. 
                                "Energetically Optimal Control of a Hip-Knee Exoskeleton Using Deep Learning-Based Control and Primitive-Based Optimization". (In Prep)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J9]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>, D. Chen, M. Gideon, A. Mazumdar. 
                                “Metabolically Optimal Route Planning for Human Navigation”. (In Prep)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J8]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>, A. Mazumdar, A. Young. 
                                “Uncertainty-Aware Physiological State Estimation for Wearable Robotics”. (In Prep)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J7]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>, S. Leapley, R. Casey, C. Nuesslein, G. Sawicki, A. Mazumdar, A. Young.
                                "Reducing Joint Loading and Metabolic Energy Expenditure in Manual Labor Tasks using a Robotic Hip-Knee Exoskeleton". (Internal Review)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J6]</span>
                            <div>
                                <span className='author-callout'>C. Carrasquillo</span>, B. Hanna, A. Mazumdar, A. Young. 
                                “Intuitive Steering Assistance from a Wearable Robotic Assistive System for Visually Impaired Navigation”. (Internal Review)
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J5]</span>
                            <div>
                                C. Nuesslein, R. Casey, S. Leapley, <span className='author-callout'>C. A. Carrasquillo</span>, G. Sawicki, A. Mazumdar, A. Young. 
                                “Generalizing Robotic Assistance for Heavily Augmented Movement to Reduce Joint Loading with a Knee Exoskeleton". (Internal Review)         
                            </div>
                        </li>
                        <li>
                            <span className='reference-number'>[J4]</span>
                            <div>
                                K. L. Scherpereel, M. C. Gombolay, M. K. Shepherd, <span className='author-callout'>C. A. Carrasquillo</span>, O. T. Inan, A. J. Young. 
                                “<a href="https://doi.org/10.1126/scirobotics.ads8652" alt="Deep Domain Adaptation Eliminates Costly Data Required for Task-Agnostic Wearable Robotic Control" target="_blank">
                                Deep Domain Adaptation Eliminates Costly Data Required for Task-Agnostic Wearable Robotic Control
                                </a>”. Science Robotics. 2025.                            
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
                                S. Zhou, W. Lee Childers, A. Young, K. Herrin. 
                                “<a href="https://journals.lww.com/poijournal/abstract/9900/a_clinical_decision_making_algorithm_for_the.355.aspx" alt="A Clinical Decision-Making Algorithm for the Personalized Prescription of Prosthetic Microprocessor-Controlled Knees: An Evidence-Based Approach based on a Randomized Trial" target="_blank">A Clinical Decision-Making Algorithm for the Personalized Prescription of Prosthetic Microprocessor-Controlled Knees: An Evidence-Based Approach based on a Randomized Trial</a>”. Prosthetics and Orthotics International. 2025.
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
                                        <span className="resume-bolded">{data.category}:&nbsp;</span>
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
