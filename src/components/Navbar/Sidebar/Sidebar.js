import React from 'react';
import './Sidebar.css';


function Sidebar(props) {
    return (
        <div className={`sidebar ${props.active ? 'active' : ''}`}>
            <a href="/"><img src={props.src} alt='logo'/></a>
            {props.menu}
        </div>
    )
}

export default Sidebar;