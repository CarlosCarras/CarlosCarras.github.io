import React, {useState, useEffect} from "react";
import "./ArmLink.css"


function ArmLink(props) {
    const linkWidth = props.width || 40;
    const linkLength = props.length || 200;
    const jointRadius = linkWidth / 2;
    const height = linkLength + 2*jointRadius;
    
    const [xPos, setXPos] = useState(props.x || 0);
    const [yPos, setYPos] = useState(props.y || 0);
    const [angle, setAngle] = useState(props.angle || 0);

    useEffect(() => {
        setXPos(props.x);
        setYPos(props.y);
        setAngle([props.angle]);
    }, [props.x, props.y, props.angle])

    return (
        <div className="armlink" style={{
                                            bottom: yPos,
                                            left: `calc(50% - ${linkWidth/2 - xPos}px)`,
                                            height: height + "px",
                                            width: linkWidth + "px",
                                            transformOrigin: `${jointRadius}px ${height - jointRadius}px`,
                                            transform: `rotate(${angle}deg)`
                                        }}
        />
    )
}

export default ArmLink;