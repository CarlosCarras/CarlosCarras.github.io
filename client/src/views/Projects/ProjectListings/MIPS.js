import React from 'react'
import ImageGallery from 'react-image-gallery'
import './../ProjectTemplate.css'

const MIPSImg0 = require('./../../../assets/project-mips-datapath.png'),
      MIPSImg1 = require('./../../../assets/project-mips-goal.png'),
      MIPSImg2 = require('./../../../assets/project-mips-test.JPG'),
      MIPSImg3 = require('./../../../assets/project-mips-vhdl.png');

const images = [
    {
        original: MIPSImg0
    },
    {
        original: MIPSImg1
    },
    {
        original: MIPSImg2
    },
    {
        original: MIPSImg3
    }
];

class MIPS extends React.Component {
    render() {
        return (
            <div className="project-page-container">
                <h1>MIPS Processor</h1>
                <div className="project-body">
                    <div className="row">
                        <div className="three-col-format-column">
                            <div className="project-info-box">
                                <h2>MIPS</h2>
                                <img src={MIPSImg0} alt="finished mounting bracket" />
                                <div className="project-summary">
                                    <span className="project-field">Timeframe:&nbsp;</span>
                                    <span className="project-text">3 weeks</span>
                                    <br /><br />
                                    <span className="project-field">BOM: </span>
                                    <ul>
                                        <li>DE10-LITE FPGA</li>
                                    </ul>
                                    <span className="project-field">Software: </span>
                                    <ul>
                                        <li>ModelSim</li>
                                        <li>Quartus Prime</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="three-col-format-column">
                            <div className="project-description">
                                <br />
                                <p> The implementation of a MIPS-like processor in VHDL. The project was compiled in Quartus and run on the
                                    DE1-LITE FPGA. The VHDL was also simulated using a testbench in ModelSim. This was a project completed
                                    as a part of the EEL4712C course.
                              </p>
                            </div>
                        </div>
                        <div className="three-col-format-column">
                            <ul class="project-timeline">
                                <li class="project-timeline-event" data-date="March 30, 2020">
                                    <h3>Coming Soon</h3>
                                    <p>The timeline will be updated soon.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="project-gallery">
                            <ImageGallery items={images} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MIPS
