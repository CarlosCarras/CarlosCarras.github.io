import React from 'react';
import './WireframeDesign.css';

const HomescreenWireframe    = require('./../../../../assets/wireframe-home.png'),
      ResumeWireframe        = require('./../../../../assets/wireframe-resume.png');

class WireframeDesign extends React.Component {
    getImage(){
        return(
            <div className="two-col-format-column wireframe-design-col-img">
                <div className="wireframe-design-container">
                    <div className="wireframe">
                        <img src={HomescreenWireframe} alt="Homescreen Wireframe"/>
                    </div>
                    <div className="wireframe">
                        <img src={ResumeWireframe} alt="Resume Wireframe"/>
                    </div>
                </div>
            </div>
        )
    }

    getText(){
        return (
            <div className="two-col-format-column wireframe-design-col-text">
                <p>
                    Next, to imagine what the end result might look like, I drew up a couple of wireframes using Microsoft PowerPoint and Notability.
                    These wireframes were medium-fidelity, which means that, while better than a hand-drawn concept, all dimensions were not final.
                    The wireframes served as a blueprint from which to base the later HTML and CSS design off of.
                </p>
            </div>
        )
    }

    render() {
        if (window.screen.width < 800) {
            return (
                <div className="row wireframe-section">
                    {this.getImage()}
                    {this.getText()}
                </div>
            )
        }
        else {
            return (
                <div className="row wireframe-section">
                    {this.getText()}
                    {this.getImage()}
                </div>
            )
        }
    }
}

export default WireframeDesign;
