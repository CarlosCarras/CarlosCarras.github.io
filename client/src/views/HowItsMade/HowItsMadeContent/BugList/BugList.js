import React from 'react';
import './BugList.css'

class BugList extends React.Component {
    render() {
        return(
            <div className="bug-section" id="bugs">
                <h1><code>{'<h1> '}</code>Bug List<code>{' </h1>'}</code></h1>
                <ul className="bug-list">

                    <span style={{color: "green"}}>Importance:&nbsp;</span>
                    <span style={{color: "#777777"}}>Medium</span><br/>
                    <li>After scrolling down in the Resume tab, moving the sticky note results in an unexpected upwards translation.</li><br/>

                    <span style={{color: "green"}}>Importance:&nbsp;</span>
                    <span style={{color: "#777777"}}>Medium</span><br/>
                    <li>The How It's Made tab is not yet optimized for Smartphone viewing.</li><br/>

                </ul>
            </div>
        )
    }
}

export default BugList
