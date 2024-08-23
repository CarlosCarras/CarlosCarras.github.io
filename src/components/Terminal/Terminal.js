import React, {useState, useEffect, useRef, useCallback} from "react";
import "./Terminal.css"

import TextArea from './TextArea/TextArea'


function Terminal(props) {
    const [theme, setTheme] = useState(props.theme)
    const [date, setDate] = useState(new Date());

    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: props.left, y: props.top });
    const [textContainerDims, setTextContainerDims] = useState({width: props.width, height: props.height});

    const textContainerRef = useRef(null);

    const hours = String(date.getHours()).padStart(2, '0') % 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    /* Functions that enable dragging the terminal around the website */
    const handleMouseMove = useCallback((event) => {
        if (!isDragging) return;
        
        let cursorX = event.clientX;
        let cursorY = Math.min(Math.max(event.clientY, 80), window.innerHeight-30);

        setPosition({
            x: cursorX - offset.x,
            y: cursorY - offset.y
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

    const handleTouchStart = (event) => {
        setIsDragging(true);
        setOffset({
            x: event.touches[0].clientX - position.x,
            y: event.touches[0].clientY - position.y
        });
    };
    
    const handleTouchMove = (event) => {
        if (isDragging) {
            setPosition({
                x: event.touches[0].clientX - offset.x,
                y: event.touches[0].clientY - offset.y
            });
        }
    };
    
    const handleTouchEnd = (event) => {
        setIsDragging(false);
    };

    const handleResize = (entries) => {
        for (let entry of entries) {
            if (entry.target.className === "text-container") {
                const w = parseInt(entry.contentRect.width);
                const h = parseInt(entry.contentRect.height);
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

        const preventDefaultTouchScroll = (e) => {
            e.preventDefault();
        };
        // window.addEventListener("touchmove", preventDefaultTouchScroll, { passive: false });
        

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            // window.removeEventListener("touchmove", preventDefaultTouchScroll);
        };
    }, [handleMouseMove]);

    // useEffect(() => {
    //     const observer = new ResizeObserver(handleResize);
    //     if (textContainerRef.current) {
    //         observer.observe(textContainerRef.current);
    //     }

    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []);

    useEffect(() => {
        const w = parseInt(props.width);
        const h = parseInt(props.height);
        setTextContainerDims({width: w, height: h});
        setTheme(props.theme);
    }, [props.width, props.height, props.theme])

    useEffect(() => {
        const container = textContainerRef.current;
        if (container) {
            container.style.width = `${textContainerDims.width}px`;
            container.style.height = `${textContainerDims.height}px`;
        }
    }, [textContainerDims]);

    return (
        <div className={"terminal-container " + theme} style={{top: position.y, left: position.x}}>
            <div className="header" onMouseDown={handleMouseDown} 
                                    onMouseUp={handleMouseUp} 
                                    // onTouchStart={handleTouchStart}
                                    // onTouchMove={handleTouchMove}
                                    // onTouchEnd={handleTouchEnd}
            >
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