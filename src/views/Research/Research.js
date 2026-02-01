import React from "react"
import "./Research.css"
import Button from "./../../components/Button/Button"


function Research() {
    return (
        <div className="research-container">
            <h1 className="research-title">Coming Soon!</h1>
            <div className='research-caption'>
                I'm currently working on adding my research to this website, apologies for the inconvenience! For now, please check out my Google Scholar.
            </div>
            <Button name="Google Scholar" href="https://scholar.google.com/citations?user=E7dTLUkAAAAJ&hl=en&oi=ao"/>
        </div>
    )
}

export default Research