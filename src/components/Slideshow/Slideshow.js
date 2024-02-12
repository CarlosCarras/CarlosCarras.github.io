import React from "react";
import "./Slideshow.css"


function Slideshow(props) {
    return (
        <div className="slideshow-container">
            <img src={props.data.src} alt={props.data.alt}/>
        </div>
    )
}

export default Slideshow;