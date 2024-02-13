import React from "react";
import "./Button.css"


function Button(props) {
    return (
        <a className="button-container" href={props.href} download={props.download}>
            {props.name}
        </a>
    )
}

export default Button;