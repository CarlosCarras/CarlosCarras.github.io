import React from "react";
import "./ProjectEntryTemplate.css"

import Slideshow from "./../../../components/Slideshow/Slideshow"



function ProjectEntryTemplate(props) {
    return (
        <div className="project-entry-page-container">
            <div className="back">
                <a href="/projects">Back</a>
            </div>
            <div className="project-entry-container">
                <div className="summary">
                    <h1>{props.data.title}</h1>
                    <Slideshow data={props.data.images}/> 
                    <div className="summary-caption">
                        <p>{props.data.date}</p>
                    </div>
                </div>
                <div className="description">
                    {props.data.description}
                </div>
            </div>
        </div>
    )
}

export default ProjectEntryTemplate;