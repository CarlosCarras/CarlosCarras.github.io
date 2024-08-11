import React from "react";
import "./Coursework.css";


const GRAD_COURSEWORK = [
    {
        semester: "Fall 2021", 
        coursework: [
                {course: "CS7642: Artificial Intelligence", credits: 3},
                {course: "CS7785: Intro to Robotics", credits: 3},
                {course: "PHIL6000: Responsible Conduct of Research", credits: 1},
        ],
    },
    {
        semester: "Spring 2022", 
        coursework: [
                {course: "CS7643: Deep Learning", credits: 3},
                {course: "ME6407: Robotics", credits: 3},
        ],
    },
    {
        semester: "Fall 2022", 
        coursework: [
                {course: "CS7641: Machine Learning", credits: 3},
                {course: "ME8843: Biomechanics of Wearable Robotic Systems", credits: 3},
                {course: "MUSI3018: Marching Band", credits: 2},
                {course: "MUSI3511: Percussion Ensemble", credits: 1},
        ],
    },
    {
        semester: "Spring 2023", 
        coursework: [
                {course: "BMED8813: Interfacing Engineering, Technology, and Rehabilitation", credits: 3},
                {course: "AE6310: Optimization for the Design of Engineered Systems", credits: 3},
        ],
    },
    {
        semester: "Summer 2023", 
        coursework: [
                {course: "APPH6225: Biostatistics", credits: 3},
        ],
    },
    {
        semester: "Fall 2023", 
        coursework: [
                {course: "CS6476: Introduction to Computer Vision", credits: 3},
                {course: "AE8803: Mathematical Principles of Planning and Decision-Making for Autonomy", credits: 3},
                {course: "MUSI3018: Marching Band", credits: 3},
        ],
    },
    {
        semester: "Spring 2024", 
        coursework: [
                {course: "AE6505: Random Processes and Kalman Filters", credits: 3},
                {course: "CS8750: Multidisciplinary Robotics Research I", credits: 3},
        ],
    },
    {
        semester: "Summer 2024", 
        coursework: [
                {course: "MATH6701: Math Methods of Applied Sciences", credits: 3},
        ],
    },
].reverse()

const UNDERGRAD_COURSEWORK = [
    {
        semester: "Fall 2017", 
        coursework: [
                {course: "MAC3474: Calculus 3 Honors", credits: 3},
                {course: "MAP2302: Differential Equations", credits: 3},
                {course: "PHY2060: Enriched Physics 1 with Calculus", credits: 3},
                {course: "CHM2046/L: General Chemistry 2 & Lab", credits: 4},
                {course: "PHI2010: Introduction to Philosophy", credits: 3},
        ],
    },
    {
        semester: "Spring 2018", 
        coursework: [
                {course: "PHY2061/L: Enriched Physics 2 with Calculus & Lab", credits: 4},
                {course: "IUF1000: What is the Good Life?", credits: 3},
                {course: "EML2023: Computer Aided Graphics and Design", credits: 3},
                {course: "EMA3010: Materials", credits: 3},
                {course: "COP3503: Programming Fundamentals 2", credits: 3},
                {course: "EGM2511: Statics", credits: 3},
        ],
    },
    {
        semester: "Summer 2018", 
        coursework: [
                {course: "COT3100: Discrete Structures", credits: 3},
                {course: "EML3100: Thermodynamics", credits: 3},
                {course: "ENC3254: Professional Writing in Discipline", credits: 3},
        ],
    },
    {
        semester: "Fall 2018", 
        coursework: [
                {course: "EEL3111C: Circuits 1", credits: 4},
                {course: "EGM3344: Numerical Analysis", credits: 3},
                {course: "COP3530: Data Structures", credits: 4},
                {course: "EGM 3401: Dynamics", credits: 3},
                {course: "EGM3520: Mechanics of Materials", credits: 3},
                {course: "EGS4034: Ethics & Professionalism", credits: 1},
        ],
    },
    {
        semester: "Spring 2019", 
        coursework: [
                {course: "EGN3353C: Fluid Mechanics", credits: 3},
                {course: "EEL3701C: Digital Logic and Computer Systems", credits: 4},
                {course: "EML2322L: Design and Manufacturing Lab", credits: 2},
                {course: "CDA3101: Introduction to Computer Organization", credits: 3},
                {course: "STA4321: Introduction to Probability", credits: 3},
        ],
    },
    {
        semester: "Summer 2019", 
        coursework: [
                {course: "EEL3135: Signals and Systems", credits: 4},
                {course: "EML4312: Control Systems", credits: 3},
                {course: "MAS3114: Computational Linear Algebra", credits: 3},
        ],
    },
    {
        semester: "Fall 2019", 
        coursework: [
                {course: "CEN3031: Intro to Software Engineering", credits: 3},
                {course: "EEL3744C: Microprocessor Applications", credits: 4},
                {course: "EML3005: Mechanical Design 1", credits: 3},
                {course: "EEE4773: Machine Learning", credits: 3},
                {course: "EML3301C: Mechanics of Materials Lab", credits: 3},
        ],
    },
    {
        semester: "Spring 2020", 
        coursework: [
                {course: "EEL3923C: Electrical Design 1", credits: 3},
                {course: "EML4220: Vibrations", credits: 3},
                {course: "EML4140: Heat Transfer", credits: 3},
                {course: "EEL4712C: Digital Design", credits: 4},
                {course: "EML4314C: Controls Lab", credits: 3},
        ],
    },
    {
        semester: "Summer 2020", 
        coursework: [
                {course: "EML4501: Mechanical Design 2", credits: 3},
                {course: "EML4147C: Thermal Systems Design & Lab", credits: 3},
                {course: "EEL4598: Computer Communications", credits: 3},
                {course: "EEL4610: State Variable Methods", credits: 3},
        ],
    },
    {
        semester: "Fall 2020", 
        coursework: [
                {course: "EML6324: Production Engineering", credits: 3},
                {course: "EML5526: Finite Element Analysis and Design", credits: 3},
                {course: "EEL4924C: Electrical Engineering Design 2", credits: 3},
                {course: "EGN4912: Engineering Directed Independent Research", credits: 2},
                {course: "EML4905: Individual Study in Mechanical Engineering", credits: 3},
        ],
    },
    {
        semester: "Spring 2021", 
        coursework: [
                {course: "EML5311: Control System Theory", credits: 3},
                {course: "COP4600: Operating Systems", credits: 3},
        ],
    },
].reverse()


function Coursework() {

    const getSemesterData = (data) => {
        return (
            data.map((semester_data, i) => (
                <div className="row semester-entry" key={i}>
                    <h3>{semester_data.semester}</h3>
                    <ul>
                        {
                            semester_data.coursework.map((coursework_data, j) => (
                                <li key={j}>
                                    <span>{coursework_data.course}</span> 
                                    <b>{coursework_data.credits}</b>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ))
        )
    }

    return (
        <div className="coursework-container">
            <h2>Graduate</h2>
            { getSemesterData(GRAD_COURSEWORK) }

            <h2>Undergraduate</h2>
            { getSemesterData(UNDERGRAD_COURSEWORK) }
        </div>
    )
}

export default Coursework;