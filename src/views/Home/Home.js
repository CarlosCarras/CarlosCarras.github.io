import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect"
import "./Home.css"

import Slideshow from "./Slideshow/Slideshow"
import Terminal from "./../../components/Terminal/Terminal"
import GearTrain from "./../../components/GearTrain/GearTrain"
import SkillEntry from "../../components/SkillEntry/SkillEntry";


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


function Home() {
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
    const [terminalWidth, setTerminalWidth] = useState(
        Math.min(90 * window.innerWidth / 100, 500)
    );
    const [terminalHeight, setTerminalHeight] = useState(
        Math.min(80 * window.innerHeight / 100, 500)
    );
    useEffect(() => {
        const handleResize = () => {
            setTerminalWidth(Math.min(80 * window.innerWidth / 100, 500));
            setTerminalHeight(Math.min(80 * window.innerHeight / 100, 500));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                    </div>
                    <div className="summary-box">
                        <span className="summary-box-title"> Developer </span>
                        <p>I like to write software to solve problems.</p>
                    </div>
                    <div className="summary-box">
                        <span className="summary-box-title"> Engineer </span>
                         <p>I like to build things to solve problems.</p>
                    </div>
                </div>
            </div>
            <div className="row skills-container">
                {SKILLS_DATA.map((skill, index) => (
                    <SkillEntry name={skill} color={colorPallete[index%colorPallete.length]} key={index}/>
                ))}
            </div>
            <div className="row aboutme">
                <div className="row-entry">
                    Test!
                </div>  
            </div>
            <div className="row terminal">
                <div className="row-entry terminal-space">
                    <Terminal top={0} left={100} width={terminalWidth} height={terminalHeight}/>
                </div> 
                <div className="row-entry terminal-desription-container">
                    <h2>Terminal</h2>
                    <p>An interactive terminal.</p>
                    <p>An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal. An interactive terminal.</p>
                </div>   
            </div>
        </div>
    )
}

export default Home;