import React, {useState, useEffect, useRef, useCallback} from "react";
import "./Terminal.css"

import TextArea from './TextArea/TextArea'


function Terminal(props) {
    const [theme, setTheme] = useState("navy")
    const [date, setDate] = useState(new Date());

    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: props.left, y: props.top });
    const [textContainerDims, setTextContainerDims] = useState({width: 720, height: 350});

    const textContainerRef = useRef(null);

    const hours = String(date.getHours()).padStart(2, '0') % 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    /* Functions that enable dragging the terminal around the website */
    const handleMouseMove = useCallback((event) => {
        if (!isDragging) return;
        
        let newX = event.clientX - offset.x;
        let newY = event.clientY - offset.y;
        newY = Math.max(30, newY);

        setPosition({
            x: newX,
            y: newY
        });
    }, [isDragging, offset]);

    const handleMouseOut = (event) => {
        if (event.clientY > 0) return;
        setIsDragging(false);
    }

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setOffset({
            x: event.clientX - position.x,
            y: event.clientY - position.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleResize = (entries) => {
        for (let entry of entries) {
            if (entry.target.className === "text-container") {
                const w = entry.contentRect.width;
                const h = entry.contentRect.height;
                setTextContainerDims({width: w, height: h});
            }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [handleMouseMove]);

    useEffect(() => {
        const observer = new ResizeObserver(handleResize);
        if (textContainerRef.current) {
            observer.observe(textContainerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={"terminal-container " + theme} style={{top: position.y, left: position.x}}>
            <div className="header" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                <span>carloscarras.tech</span>
                <span>bash - {textContainerDims.width + "x" + textContainerDims.height}</span>
                <span>{timeString}</span>
            </div>
            <div ref={textContainerRef} className="text-container">
                <TextArea/>
            </div>
        </div>
    )
}

export default Terminal;