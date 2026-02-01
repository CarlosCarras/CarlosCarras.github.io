import React from "react";
import "./Projects.css"

import Button from "./../../components/Button/Button"
import ThumbnailList from "./../../components/ThumbnailList/ThumbnailList";
import RobotArm from "./../../components/RobotArm/RobotArm";

import Max from "./ProjectEntries/Max";
import PC1 from "./ProjectEntries/PC1";
import Swamphacks from "./ProjectEntries/Swamphacks";
import MountingBracket from "./ProjectEntries/MountingBracket";
import Bioprinter from "./ProjectEntries/Bioprinter";
import Mips from "./ProjectEntries/Mips";
import Lathe from "./ProjectEntries/Lathe";
import D3 from "./ProjectEntries/D3";
import PumpController from "./ProjectEntries/PumpController";
import Guns4Roses from "./ProjectEntries/Guns4Roses";
import Website1 from "./ProjectEntries/Website1";
import TransferBoard from "./ProjectEntries/TransferBoard";


const PROJECT_DATA = [
    Max,
    PC1, 
    Swamphacks, 
    MountingBracket, 
    Bioprinter, 
    Lathe, 
    Mips, 
    D3, 
    PumpController, 
    Guns4Roses,
    Website1,
    TransferBoard
]


function Projects() {
    let projectData = []
    for (let i=0; i < PROJECT_DATA.length; i++) {
        projectData.push(
            {
                title: PROJECT_DATA[i].title,
                date: PROJECT_DATA[i].date,
                caption: PROJECT_DATA[i].caption,
                thumbnail: PROJECT_DATA[i].images[0].src,
                href: PROJECT_DATA[i].href,
                jsDate: new Date(PROJECT_DATA[i].date).getTime(),
            }
        )
    }

    projectData.sort((a, b) => b.jsDate - a.jsDate); // descending order

    return (
        <div className="projects-container">
            <div className="row">
                <div className='button-group-container'>
                    <Button name="View Research" href={"/research"} newtab={false}/>
                </div>
            </div>
            <div className="row">
                <div className="project-thumbnail-container">
                    <ThumbnailList data={projectData}/>
                </div>
                <div className="robot-container">
                    <RobotArm/>
                </div>
            </div>
        </div>
    )
}

export default Projects;