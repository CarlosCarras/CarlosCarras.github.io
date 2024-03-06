import React, { useState, useEffect, useRef, useCallback} from "react";
import "./RobotArm.css";

import ArmLink from "./ArmLink/ArmLink";
import Base from "./Base/Base";
import EndEffector from "./EndEffector/EndEffector";
import DRO from "./DRO/DRO";

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
const LINK_WIDTH = 40;

const LINKS = [
    { x: 0, y: 10, angle: 0, length: 200 },
    { x: 0, y: 210, angle: 0, length: 200 },
    { x: 0, y: 310, angle: 0, length: 100 },
];
const ENDEFFECTOR = { x: 0, y: 410, angle: 0, width: 80 };
const BASE = {width: 150, height: 50};


const wrapAngle = (ang) => {
    while (ang <= -180) ang += 360;
    while (ang > 180) ang -= 360;

    return ang;
}

function RobotArm() {
    const [links, setLinks] = useState(LINKS);
    const [endEffector, setEndEffector] = useState(ENDEFFECTOR);
    const containerRef = useRef(null);

    function forwardK(links, angles) {
        const newLinks = [...links];
        newLinks[0].angle = angles[0];
        for (let i = 1; i < angles.length; i++) {
            newLinks[i].x = newLinks[i - 1].x + newLinks[i - 1].length * Math.sin(newLinks[i - 1].angle * DEG2RAD);
            newLinks[i].y = newLinks[i - 1].y + newLinks[i - 1].length * Math.cos(newLinks[i - 1].angle * DEG2RAD);
            newLinks[i].angle = newLinks[i - 1].angle + angles[i];
        }
        return newLinks;
    }

    function inverseK(links, px, py, psi) {
        let L12 = links[0].length;
        let L23 = links[1].length;
        let L34 = links[2].length;
        let x3 = px - L34 * Math.sin(psi * DEG2RAD);
        let y3 = py - L34 * Math.cos(psi * DEG2RAD);

        let alpha = Math.acos((Math.pow(x3, 2) + Math.pow(y3, 2) - Math.pow(L12, 2) - Math.pow(L23, 2)) / (2 * L12 * L23));
        let beta = Math.asin((L23 * Math.sin(alpha)) / Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2)));

        let theta1 = (Math.atan2(x3, y3) - beta) * RAD2DEG;
        let theta2 = alpha * RAD2DEG;
        let theta3 = psi - theta1 - theta2;

        return [theta1, theta2, theta3];
    }

    const setPosition = useCallback((cursorX, cursorY) => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const offsetX = cursorX - containerRect.left;
        const offsetY = cursorY - containerRect.top;
        const centerX = containerRect.width / 2;
        const bottomY = containerRect.height - BASE.height/2;

        const x = offsetX - centerX;
        const y = bottomY - offsetY;

        const angles = inverseK(links, x, y, -45);
        if (isNaN(angles[0]) || isNaN(angles[1]) || isNaN(angles[2])) return;

        const newLinks = forwardK(links, angles);
        setLinks(newLinks)

        /* configuring end effector */
        let ex = newLinks[2].x + newLinks[2].length * Math.sin(newLinks[2].angle * DEG2RAD);
        let ey = newLinks[2].y + newLinks[2].length * Math.cos(newLinks[2].angle * DEG2RAD);
        let eth = newLinks[2].angle
        setEndEffector({ x: ex, y: ey, angle: eth, width: ENDEFFECTOR.width });
    }, [links])
    
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition(event.clientX, event.clientY);
        };

        const handleTouchMove = (event) => {
            setPosition(event.touches[0].clientX, event.touches[0].clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [links, setLinks, setEndEffector, setPosition]);

    

    return (
        <div className="robot-arm" ref={containerRef}>
            {links.map((link, i) => (
                <ArmLink x={link.x} y={link.y} angle={link.angle} length={link.length} width={LINK_WIDTH} key={i} />
            ))}
            <Base className="base" width={BASE.width} height={BASE.height} />
            <EndEffector className="gripper" x={endEffector.x} y={endEffector.y} angle={endEffector.angle} width={endEffector.width}/>
            <DRO className='dro' x={endEffector.x} 
                                 y={endEffector.y} 
                                 angle0={wrapAngle(links[0].angle)} 
                                 angle1={wrapAngle(links[1].angle - links[0].angle)} 
                                 angle2={wrapAngle(links[2].angle - links[1].angle)}/>
        </div>
    );
}

export default RobotArm;
