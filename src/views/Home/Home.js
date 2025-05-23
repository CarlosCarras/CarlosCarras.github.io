import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect"
import "./Home.css"

import Terminal from "./../../components/Terminal/Terminal"
import GearTrain from "./../../components/GearTrain/GearTrain"
import SkillEntry from "../../components/SkillEntry/SkillEntry";
import AboutMe from "../../components/AboutMe/AboutMe"
import ExpandableArrow from "../../components/ExpandableArrow/ExpandableArrow";


const SHUTTLE = require('./../../assets/shuttle.png');

const SKILLS_DATA = [
    {"name": "Python", "proficiency": 5},
    {"name": "C/C++", "proficiency": 4},
    {"name": "C#", "proficiency": 4},
    {"name": "MATLAB", "proficiency": 5},
    {"name": "Simulink", "proficiency": 4},
    {"name": "Java", "proficiency": 3},
    {"name": "JavaScript", "proficiency": 5},
    {"name": "VBA", "proficiency": 3},
    {"name": "LabVIEW", "proficiency": 2},
    {"name": "VHDL", "proficiency": 2},
    {"name": "PyTorch", "proficiency": 5},
    {"name": "Arduino", "proficiency": 4},
    {"name": "SolidWorks", "proficiency": 5},
    {"name": "Fusion 360", "proficiency": 2},
    {"name": "Autodesk Inventor", "proficiency": 2},
    {"name": "Altium Designer", "proficiency": 5},
    {"name": "LaTeX", "proficiency": 4},
    {"name": "Linux", "proficiency": 4},
    {"name": "LTSpice", "proficiency": 2},
    {"name": "React.js", "proficiency": 4},
    {"name": "MERN Stack", "proficiency": 4},
    {"name": "OpenMDAO", "proficiency": 3},
    {"name": "OpenSim", "proficiency": 2},
    {"name": "ROS", "proficiency": 4},
    {"name": "Splunk", "proficiency": 3},
    {"name": "SPSS", "proficiency": 3},
    {"name": "Unity", "proficiency": 4},
    {"name": "Vicon", "proficiency": 2},
    {"name": "manual machining", "proficiency": 4},
    {"name": "CNC", "proficiency": 3},
    {"name": "3D printing", "proficiency": 5},
]

const colorPallete = ["#1ecbe1", "#e0e300", "#1ee196", "#ff598f", "#d300dd"];

const TERMINAL_MAXDIMS = {w: 800, h: 400},
      TERMINAL_THEMES = [
        "Basic",
        "Florida",
        "Homebrew",
        "Navy",
        "Tech"
      ];

function Home(props) {
    const [isDarkmode, setDarkMode] = useState(props.darkmode);
    const defaultTerminalIdx = isDarkmode ? 2 : 0;
    const [terminalTheme, setTerminalTheme] = useState(TERMINAL_THEMES[defaultTerminalIdx].toLocaleLowerCase());
    const [isShuttleFlyingOut, setIsShuttleFlyingOut] = useState(false);
    const [isLoaded, setIsLoaded] = useState(
        typeof window !== "undefined"
            ? sessionStorage.getItem("isLoaded") || false
            : false
    )
    const [gearTrainScale, setGearTrainScale] = useState(0.1 + 0.00025 * window.innerWidth);
    const [terminalWidth, setTerminalWidth] = useState(300);
    const [terminalHeight, setTerminalHeight] = useState(300);
    const [isNarrow, setIsNarrow] = useState(false);
    const [isNarrowSkills, setIsNarrowSkills] = useState(false);
    const [terminalPos, setTerminalPos] = useState({x: Math.max((0.4*window.innerWidth-400)/2, 0), y: 50});
    const [skillsExpanded, setSkillsExpanded] = useState(false);

    const handleShuttleClick = () => {
        setIsShuttleFlyingOut(true);
        setTimeout(() => setIsShuttleFlyingOut(false), 2000);
    };

    const handleThemeChange = (event) => {
        setTerminalTheme(event.target.value);
    }
    
    useEffect(() => {
        const handleResize = () => {
            /* manage terminal width and height */
            const _isNarrow = window.innerWidth < 950;
            const _isNarrowSkills = window.innerWidth < 630;
            const posMultiplier = _isNarrow ? 0.9 : 0.45;
            const widthMultiplier = _isNarrow ? 0.8 : 0.4;
            const heightMultiplier = 0.8;
            
            setTerminalPos({x: posMultiplier*window.innerWidth-terminalWidth/2, y: 50});
            setTerminalWidth(Math.min(widthMultiplier*window.innerWidth, TERMINAL_MAXDIMS.w));
            setTerminalHeight(Math.min(heightMultiplier*window.innerHeight, TERMINAL_MAXDIMS.h));
            setIsNarrow(_isNarrow);
            setIsNarrowSkills(_isNarrowSkills);
            setGearTrainScale(0.1 + 0.00025 * window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [terminalWidth]);

    useEffect(() => {
        setDarkMode(props.darkmode)
        const newTerminalIdx = props.darkmode ? 2 : 0;
        setTerminalTheme(TERMINAL_THEMES[newTerminalIdx].toLocaleLowerCase());
    }, [props.darkmode]);

    return(
        <div className="home-container">
            <div className="row">
                <div className="row-entry">
                    <div className="title-container">
                        <span className="greeting">👋 Hi, I am </span>
                        <h1 className="title">
                            {isLoaded ? 
                                (
                                    <>
                                        <span>Carlos</span> 
                                        <br/>
                                        <span>Carrasquillo</span>
                                    </>
                                ) : 
                                (
                                <Typewriter
                                    style={{ marginTop: 0, paddingTop: 0 }}
                                    options={{
                                        deleteSpeed: "natural",
                                        delay: 40
                                    }}
                                    onInit={typewriter => {
                                        typewriter
                                        // .typeString("Software Developer")
                                        // .pauseFor(2500)
                                        // .deleteAll()
                                        .typeString("Carlos<br>Carrasquillo")
                                        .callFunction(() => {
                                            setIsLoaded(true)
                                        })
                                        .start()
                                    }}
                                />
                                )
                            }
                        </h1>
                        <GearTrain scale={gearTrainScale}/>

                        <img className={`shuttle ${isShuttleFlyingOut ? 'flying-out' : 'flying-in'}`} 
                             src={SHUTTLE} 
                             alt="shuttle" 
                             onClick={handleShuttleClick}/>
                    </div>
                    <div className="subtitle-container">
                        <span> Robotics PhD Student @ Georgia Tech </span>
                        <br/>
                        <span> Student Pilot @ Skybound Aviation </span>
                        <br/>
                        <br/>
                        <span> MS, Computer Science @ GT</span> <span className="grad-year">2025</span>
                        <br/>
                        <span> MS, Aerospace Engineering @ GT</span> <span className="grad-year">2025</span>
                        <br/>
                        <span> BS, Computer Engineering @ UF</span> <span className="grad-year">2021</span>
                        <br/>
                        <span> BS, Mechanical Engineering @ UF</span> <span className="grad-year">2021</span>
                    </div> 
                </div>
                <div className="row-entry summary">
                    <div className="summary-box">
                        <span className="summary-box-title"> Researcher </span>
                        <p>I like to methodically tackle hard questions. </p>
                        <a href="https://scholar.google.com/citations?user=E7dTLUkAAAAJ" target="_blank" rel="noopener noreferrer"> Google Scholar </a>
                    </div>
                    <div className="summary-box">
                        <span className="summary-box-title"> Developer </span>
                        <p>I enjoy writing code to automate... pretty much everything.</p>
                        <a href="https://github.com/CarlosCarras" target="_blank" rel="noopener noreferrer"> GitHub </a>
                    </div>
                    <div className="summary-box">
                        <span className="summary-box-title"> Engineer </span>
                        <p>I design things to solve problems.</p>
                        <a href="/projects" target="_blank"> Design Portfolio </a>
                    </div>
                </div>
            </div>
            <div className="row skills">
                <div className={`skills-container ${skillsExpanded || !isNarrowSkills ? '' : 'abbreviated'}`}>
                    {SKILLS_DATA.map((skill, index) => (
                        <SkillEntry name={skill['name']} proficiency={skill['proficiency']} color={colorPallete[index%colorPallete.length]} key={index}/>
                    ))}
                </div>
                {
                    isNarrowSkills ?
                    <ExpandableArrow initState={false} onClick={() => setSkillsExpanded(!skillsExpanded)}/>   
                    :
                    <></>
                }
            </div>
            <div className="row aboutme">
                <AboutMe/>
            </div>
            <div className="row terminal">
                <div className={"row-entry terminal-desription-container " + (isNarrow ? "narrow" : "")}>
                    <h2>Terminal</h2>
                    <p>Use this mock terminal interface to navigate the website, or just to mess around. Please let me know if you spot any bugs.</p>
                    <p>e.g. commands:</p>
                    <ul>
                        <li><samp>ls extras</samp></li>
                        <li><samp>cd extras/asb2023</samp></li>
                        <li><samp>echo "Hello World!"</samp></li>
                        <li><samp>alias thwg "To Hell With Georgia!"</samp></li>
                        <li><samp>alias gg "Go Gators!"</samp></li>
                        <li><samp>unalias gg</samp></li>
                        <li><samp>pwd</samp></li>
                        <li><samp>clear</samp></li>
                        <li>etc.</li>
                    </ul>
                    
                    <span className="input-caption"> Theme </span>
                    <select name="theme-selector" 
                            className="terminal-theme-selector" 
                            onChange={handleThemeChange}>
                        {TERMINAL_THEMES.map((entry, index) => (
                            <option value={entry.toLocaleLowerCase()} 
                                    key={index} 
                                    defaultValue={terminalTheme === entry.toLocaleLowerCase()}>
                                {entry}
                            </option>
                        ))}
                    </select>
                </div>   
                <Terminal top={terminalPos.y} left={terminalPos.x} width={terminalWidth} height={terminalHeight} theme={terminalTheme}/>
            </div>
        </div>
    )
}

export default Home;