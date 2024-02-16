import React, {useState, useEffect} from "react";
import "./EndEffector.css"


const ENDEFFECTOR = require('./../../../assets/endeffector.png');


function EndEffector(props) {
    const width = props.width || 100;

    const [xPos, setXPos] = useState(props.x || 0);
    const [yPos, setYPos] = useState(props.y || 0);
    const [angle, setAngle] = useState(props.angle || 0);

    useEffect(() => {
        setXPos(props.x);
        setYPos(props.y);
        setAngle([props.angle]);
    }, [props.x, props.y, props.angle])


    return (
        <img className="endeffector" src={ENDEFFECTOR} alt='end effector' 
                 style={{
                            left: `calc(50% - ${width/2 - xPos}px)`,
                            bottom: `${yPos + 20}px`,
                            transformOrigin: "center bottom",
                            width: width + "px",
                            transform: `rotate(${angle}deg)`
                        }}/>
    )
}

export default EndEffector;