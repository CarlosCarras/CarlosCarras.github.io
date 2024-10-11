import React, { useState } from "react";
import "./SkillEntry.css"
import ProficiencyTooltip from "./ProficiencyTooltip/ProficiencyTooltip";


function SkillEntry(props) {
    const [tooltipIsVisible, setTooltipIsVisible] = useState(false);

    return (
        <div className="skill-container" 
             style={{"color": props.color, "borderColor": props.color}}
             onMouseEnter={() => setTooltipIsVisible(true)}
             onMouseLeave={() => setTooltipIsVisible(false)}>
            
            {props.name}

            <ProficiencyTooltip active={tooltipIsVisible} value={props.proficiency}/>
        </div>
    )
}

export default SkillEntry;