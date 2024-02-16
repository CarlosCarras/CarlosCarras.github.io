import React from 'react';
import './Sidebar.css';


function Sidebar(props) {
    return (
        <div className={`sidebar ${props.active ? 'active' : ''}`}>
            <img src={props.src} alt='logo'/>
            {props.menu}
        </div>
    )
}

export default Sidebar;