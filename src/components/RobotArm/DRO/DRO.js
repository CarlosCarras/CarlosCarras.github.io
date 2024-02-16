import React, { useState, useEffect } from "react";
import "./DRO.css"


const NUM_DECIMALS = 3;


function DRO(props) {
    const [isInverseK, setIsInverseK] = useState(true);
    const [xReadout, setXReadout] = useState(props.x || 0);
    const [yReadout, setYReadout] = useState(props.y || 0);

    const [angle0Readout, setAngle0Readout] = useState(props.angle0 || 0);
    const [angle1Readout, setAngle1Readout] = useState(props.angle1 || 0);
    const [angle2Readout, setAngle2Readout] = useState(props.angle2 || 0);

    const handleClick = (event) => {
        setIsInverseK(!isInverseK);
    }

    useEffect(() => {
        setXReadout(props.x);
        setYReadout(props.y);
        setAngle0Readout(props.angle0);
        setAngle1Readout(props.angle1);
        setAngle2Readout(props.angle2);
        
    }, [props.x, props.y, props.angle0, props.angle1, props.angle2])


    return (
        <div className="dro-container">
            <div>
                {
                    isInverseK ? 
                    <>
                        <span>Joint 0: {angle0Readout.toFixed(NUM_DECIMALS)  + " deg"}</span>
                        <span>Joint 1: {angle1Readout.toFixed(NUM_DECIMALS)  + " deg"}</span>
                        <span>Joint 2: {angle2Readout.toFixed(NUM_DECIMALS)  + " deg"}</span>
                    </>
                    :
                    <>
                        <span>X: {xReadout.toFixed(NUM_DECIMALS)  + " px"}</span>
                        <span>Y: {yReadout.toFixed(NUM_DECIMALS) + " px"}</span>
                    </>
                }
            </div>
            <div>
                <button className="toggle-btn" onClick={handleClick}>
                    Toggle
                </button>
            </div>
        </div>
    )
}

export default DRO;