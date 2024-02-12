import React from "react";
import "./SkillEntry.css"


function SkillEntry(props) {
    return (
        <div className="skill-container" style={{"color": props.color, "borderColor": props.color}}>
            {props.name}
        </div>
    )
}

export default SkillEntry;