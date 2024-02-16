import React from "react";
import "./Base.css";


function Base(props) {
    const baseWidth = props.width || 50;
    const baseHeight = props.height || 15;

    return (
        <div className="robot-base" style={{width: baseWidth, height: baseHeight}}>
            
        </div>
    )
}

export default Base;