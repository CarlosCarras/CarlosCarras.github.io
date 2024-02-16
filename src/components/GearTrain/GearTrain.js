import React, {useState, useEffect, useRef, useCallback} from "react";
import "./GearTrain.css"


const CHALK_ARROW = require('./../../assets/chalk_arrow.png');

const GEARS = [
    {src: require('./../../assets/gear1.png'), dim: 330, teeth: 12},
    {src: require('./../../assets/gear2.png'), dim: 200, teeth: 6},
    {src: require('./../../assets/gear3.png'), dim: 242, teeth: 8},
]

const DT = 0.05;
const MAX_SPEED = 4;
const ACCEL = 0.05;
const CLOCKWISE = false;


function GearTrain(props) {
    const [angleOnGrab, setAngleOnGrab] = useState({object: 0, cursor: 0});
    const [manualControl, setManualControl] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const gear1Ref = useRef(null);

    const [angle1, setAngle1] = useState(0);        // [deg]
    const [angle2, setAngle2] = useState(0);        // [deg]
    const [angle3, setAngle3] = useState(0);        // [deg]
    const [angVel1, setAngVel1] = useState(0);      // [deg/sec]

    const scale = props.scale;
    const ang1To2 = 40 * (Math.PI / 180);           // [rad]
    const ang2To3 = 60 * (Math.PI / 180);           // [rad]

    const r1 = scale * GEARS[0].dim / 2;
    const r2 = scale * GEARS[1].dim / 2;
    const r3 = scale * GEARS[2].dim / 2;

    const ratio1To2 = GEARS[1].teeth / GEARS[0].teeth
    const ratio2To3 = GEARS[2].teeth / GEARS[1].teeth

    const pos1 = {x: 0, y: 0};
    const pos2 = {x: pos1.x + 0.92*(r1+r2+r1/2)*Math.cos(ang1To2), 
                  y: pos1.y + 0.95*(r1+r2+r1/2)*Math.sin(ang1To2)}
    const pos3 = {x: pos2.x + (r2+r3-r1/2+r2/2)*Math.cos(ang2To3), 
                  y: pos2.y - (r2+r3-r1/2+r2/2)*Math.sin(ang2To3)}

    /* Driving gear 1 */
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (manualControl) return;

            const newAngVel1 = Math.min(angVel1 + ACCEL, MAX_SPEED);
            setAngVel1(newAngVel1);
            
            const sign = CLOCKWISE ? -1 : 1;
            setAngle1(prevAngle1 => prevAngle1 - sign*angVel1);
            setAngle2(prevAngle2 => prevAngle2 + sign*(angVel1 / ratio1To2));
            setAngle3(prevAngle3 => prevAngle3 - sign*(angVel1 / ratio1To2 / ratio2To3));

        }, DT * 1000);
        return () => clearInterval(intervalId);
    }, [manualControl, angVel1, ratio1To2, ratio2To3]);

    /* Allow gear 1 to be driven */
    const handleMouseDown = (event) => {
        setAngleOnGrab({object: angle1, cursor: calculateDeltaAngleFromMousePosition()});
        setManualControl(true);
        setAngVel1(0);
    };
    
    /* Allow gear 1 to be driven (by mouse and touch) */
    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!manualControl) return;
            const rect = gear1Ref.current.getBoundingClientRect();
            const deltaX = event.clientX - (rect.left + rect.width / 2);
            const deltaY = event.clientY - (rect.top + rect.height / 2);
            setMousePosition({ x: deltaX, y: deltaY });
        };
        const handleTouchMove = (event) => {
            if (!manualControl) return;
            const rect = gear1Ref.current.getBoundingClientRect();
            const deltaX = event.touches[0].clientX - (rect.left + rect.width / 2);
            const deltaY = event.touches[0].clientY - (rect.top + rect.height / 2);
            setMousePosition({ x: deltaX, y: deltaY });
        };
      
        const handleMouseUp = () => { setManualControl(false) };
        const handleTouchEnd = () => { setManualControl(false) };
      
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('touchcancel', handleTouchEnd);
      
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, [manualControl]);
    
    const calculateDeltaAngleFromMousePosition = useCallback(() => {
        const deltaX = mousePosition.x;
        const deltaY = mousePosition.y;

        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        if (angle < 0) angle += 360;

        return angle;
    }, [mousePosition]);
    
    /* Moving Gears */
    useEffect(() => {
        if (manualControl) {
            const deltaAngle1 = (angle1 - angleOnGrab.object) - (calculateDeltaAngleFromMousePosition() - angleOnGrab.cursor);
            setAngle1(angle1 - deltaAngle1);
            setAngle2(prevAngle2 => prevAngle2 + deltaAngle1 / ratio1To2);
            setAngle3(prevAngle3 => prevAngle3 - deltaAngle1 / ratio1To2 / ratio2To3);
        }
    }, [manualControl, angle1, ratio1To2, ratio2To3, angleOnGrab, calculateDeltaAngleFromMousePosition]);
    
    
    return (
        <div className="geartrain-container">
            <img id="gear1" className="gear" src={GEARS[0].src} alt="gear 1" draggable={false} 
                 style={{"top": pos1.y, "right": pos1.x, "height": 2*r1, "transform": "rotate("+angle1+"deg)"}}
                 onMouseDown={handleMouseDown}
                 onTouchStart={handleMouseDown}
                 ref={gear1Ref}/>
            <img id="gear2" className="gear" src={GEARS[1].src} alt="gear 2" draggable={false} 
                 style={{"top": pos2.y, "right": pos2.x, "height": 2*r2, "transform": "rotate("+angle2+"deg)"}}/>
            <img id="gear3" className="gear" src={GEARS[2].src} alt="gear 3" draggable={false} 
                 style={{"top": pos3.y, "right": pos3.x, "height": 2*r3, "transform": "rotate("+angle3+"deg)"}}/>
            <img className="geartrain-arrow" src={CHALK_ARROW} style={{"top": (-2 + 0.0002*window.innerWidth)+"vw", "right": "-4vw", "height": 120*scale+"px"}} alt="arrow"/>
        </div>
    )
}

export default GearTrain;