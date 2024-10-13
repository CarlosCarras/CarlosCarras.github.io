import React from "react";
import "./ProficiencyTooltip.css"


function ProficiencyTooltip(props) {
    const COLORS = [
        "255, 0, 0",
        "255, 127, 0",
        "255, 255, 0",
        "127, 255, 0",
        "0, 255, 0",
    ]
    
    return (
        <div className={`proficiency-tooltip-container ${props.active ? 'active' : ''}`}>
            <h5>Proficiency:</h5>
            <div className="proficiency-indicator">
                {
                    COLORS.map((color, index) => (
                        <div className="proficiency-bar" 
                             style={{'backgroundColor': `rgba(${color}, ${props.value > index ? 1 : 0})`}}
                             key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProficiencyTooltip;