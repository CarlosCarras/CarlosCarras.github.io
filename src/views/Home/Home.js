import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect"
import "./Home.css"

import Terminal from "./../../components/Terminal/Terminal"
import GearTrain from "./../../components/GearTrain/GearTrain"
import SkillEntry from "../../components/SkillEntry/SkillEntry";
import AboutMe from "../../components/AboutMe/AboutMe"


const SHUTTLE = require('./../../assets/shuttle.png');

const SKILLS_DATA = [
    "Python",
    "C/C++",
    "C#",
    "MATLAB",
    "Simulink",
    "Java",
    "JavaScript",
    "VBA",
    "LabVIEW",
    "VHDL",
    "PyTorch",
    "Arduino",
    "SolidWorks",
    "Fusion 360",
    "Autodesk Inventor",
    "Altium Designer",
    "LaTeX",
    "Linux",
    "LTSpice",
    "React.js",
    "MERN Stack",
    "OpenMDAO",
    "OpenSim",
    "ROS",
    "Splunk",
    "Unity",
    "Vicon",
    "manual machining",
    "CNC",
    "3D printing"
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

    const handleShuttleClick = () => {
        setIsShuttleFlyingOut(true);
        setTimeout(() => setIsShuttleFlyingOut(false), 2000);
    };

    const handleThemeChange = (event) => {
        setTerminalTheme(event.target.value);
    }

    /* update gears when window resized */
    const [gearTrainScale, setGearTrainScale] = useState(0.1 + 0.00025 * window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setGearTrainScale(0.1 + 0.00025 * window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    /* manage terminal width and height */
    const [terminalWidth, setTerminalWidth] = useState(300);
    const [terminalHeight, setTerminalHeight] = useState(300);
    const [isNarrow, setIsNarrow] = useState(false);
    const [terminalPos, setTerminalPos] = useState({x: Math.max((0.4*window.innerWidth-400)/2, 0), y: 50});
    useEffect(() => {
        const handleResize = () => {
            const _isNarrow = window.innerWidth < 950;
            const posMultiplier = _isNarrow ? 0.9 : 0.45;
            const widthMultiplier = _isNarrow ? 0.8 : 0.4;
            const heightMultiplier = 0.8;

            setTerminalPos({x: posMultiplier*window.innerWidth-terminalWidth/2, y: 50});
            setTerminalWidth(Math.min(widthMultiplier*window.innerWidth, TERMINAL_MAXDIMS.w));
            setTerminalHeight(Math.min(heightMultiplier*window.innerHeight, TERMINAL_MAXDIMS.h));
            setIsNarrow(_isNarrow);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [terminalWidth]);

    useEffect(() => {
        setDarkMode(props.darkmode)
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
                        <br/>
                        <span> BS, Mechanical Engineering @ UF</span> <span className="grad-year">2021</span>
                        <br/>
                        <span> BS, Mechanical Engineering @ UF</span> <span className="grad-year">2021</span>
                    </div> 
                </div>
                <div className="row-entry summary">
                    <div className="summary-box">
                        <span className="summary-box-title"> Researcher </span>
                        <p>I like to rigorously and methodically find answers to questions.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"> Google Scholar </a>
                    </div>
                    <div className="summary-box">
                        <span className="summary-box-title"> Developer </span>
                        <p>I like to write software to solve problems.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"> GitHub </a>
                    </div>
                    <div className="summary-box">
                        <span className="summary-box-title"> Engineer </span>
                        <p>I like to build things to solve problems.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"> Design Portfolio </a>
                    </div>
                </div>
            </div>
            <div className="row skills-container">
                {SKILLS_DATA.map((skill, index) => (
                    <SkillEntry name={skill} color={colorPallete[index%colorPallete.length]} key={index}/>
                ))}
            </div>
            <div className="row aboutme">
                <AboutMe/>
            </div>
            <div className="row terminal">
                <div className={"row-entry terminal-desription-container " + (isNarrow ? "narrow" : "")}>
                    <h2>Terminal</h2>
                    <p>An interactive terminal.</p>
                    <p>An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal.</p>
                    
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