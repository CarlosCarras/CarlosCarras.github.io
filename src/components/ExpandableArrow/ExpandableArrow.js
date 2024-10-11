import React, { useState, useEffect } from "react";
import "./ExpandableArrow.css"


function ExpandableArrow(props) {
    return (
        <div className={`expandable-arrow-container ${props.active ? 'active' : ''}`} onClick={() => props.onClick()}>
            <div className="expandable-arrow-edge arrow-edge-left"/>
            <div className="expandable-arrow-edge arrow-edge-right"/>
        </div>
    )
}

export default ExpandableArrow;