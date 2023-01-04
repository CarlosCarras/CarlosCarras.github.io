import React from 'react'
import ImageGallery from 'react-image-gallery'
import './../ProjectTemplate.css'

const PCBuildImg0 = require('./../../../assets/project-pc_build0.JPG'),
      PCBuildImg1 = require('./../../../assets/project-pc_build1.JPG'),
      PCBuildImg2 = require('./../../../assets/project-pc_build2.JPG'),
      PCBuildImg3 = require('./../../../assets/project-pc_build3.JPG'),
      PCBuildImg4 = require('./../../../assets/project-pc_build4.JPG'),
      PCBuildImg5 = require('./../../../assets/project-pc_build5.JPG'),
      PCBuildImg6 = require('./../../../assets/project-pc_build6.JPG'),
      PCBuildImg7 = require('./../../../assets/project-pc_build7.JPG');

const images = [
  {
    original: PCBuildImg5
  },
  {
    original: PCBuildImg4
  },
  {
    original: PCBuildImg2
  },
  {
    original: PCBuildImg3
  },
  {
    original: PCBuildImg1
  },
  {
    original: PCBuildImg0
  },
  {
    original: PCBuildImg6
  },
  {
    original: PCBuildImg7
  },
];


class PCBuild extends React.Component {
    render() {
        return(
            <div className="project-page-container">
                <h1>PC Build</h1>
                <div className="project-body">
                    <div className="row">
                        <div className="three-col-format-column">
                            <div className="project-info-box">
                                <h2>PC Build</h2>
                                <img src={PCBuildImg5} alt="finished pc"/>
                                <div className="project-summary">
                                    <span className="project-field">Timeframe:&nbsp;</span>
                                    <span className="project-text">4 months</span>
                                    <br/>
                                    <span className="project-field">Assistance:&nbsp;</span>
                                    <span className="project-text"><a href="https://www.linkedin.com/in/jaxnb/" target="_blank" rel="noopener noreferrer">Jaxon Brown</a></span>
                                    <br/><br/>
                                    <span className="project-field">BOM: </span>
                                    <ul>
                                        <li>Case: Phanteks Shift</li>
                                        <li>Processor: Intel i7 8700K</li>
                                        <li>GPU: Gigabyte Aorus 1080ti</li>
                                        <li>Motherboard: Asus Strix Z370i</li>
                                        <li>RAM: 16GB GSkill 3600 RAM</li>
                                        <li>PSU: Silverstone SF600 PSU</li>
                                        <li>RGB: NZXT Hue LED Kit</li>
                                    </ul>
                                    <span className="project-field">Watercooling Gear: </span>
                                    <ul>
                                        <li>Phanteks CPU Block</li>
                                        <li>EK FC GPU Block</li>
                                        <li>EK D5 Pump</li>
                                        <li>2x HW Labs GTS120 Radiators</li>
                                        <li>Phanteks Hardline Fittings</li>
                                        <li>EK Quick Disconnect</li>
                                        <li>PETG Tubing</li>
                                        <li>Mayhems Pastel Blueberry Coolant</li>
                                        <li>1x 120mm Noctua NF-A12x15</li>
                                        <li>1x 120mm Corsair ML120</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="three-col-format-column">
                            <div className="project-description">
                                <br/>
                                <p>
                                    On October 2, 2017, I took a SolidWorks certification exam on my laptop. After spending about five minutes attempting to make the Cartesian
                                    planes visible, SolidWorks crashed on my laptop. I repeated the same process within the next hour, never getting any further than a few
                                    sketches and a few extrusions. I left the testing hall that day without a certification, but with a determination to build my own computer
                                    that could carry me through the rest of my undergraduate courseload.
                                </p>
                                <p>
                                    I started looking into the hardware by using analytics from independent testers on websites like YouTube and Reddit. To future-proof my system,
                                    I settled on an i7 8700K as my CPU and a 1080ti as my GPU. I also wanted a very unique look to my build. I was very into small form-factor builds,
                                    so I selected a Phanteks Shift case. A little bit of research revealed that nobody had attempted to build a hardline liquid cooling system in this
                                    case. So I decided to build a hardline liquid cooling system in the Phanteks Shift.
                                </p>
                                <p>
                                    Because this case was not designed to fit a watercooling loop, building this computer turned out to be rather complicated. Two radiators were
                                    installed for maximum heat dissipation; these were press-fit into the lower half of the case. A custom mounting bracket had to be designed to
                                    fit the pump in the case. This bracket was 3D printed out of ABS plastic (this decision had negative consequences - more on this later).
                                    Furthermore, a reservoir couldn't be mounted onto the case, so an external reservoir was used during the filling process.
                                </p>
                                <p>
                                    The 120mm Noctua fan, originally brown in color, was spray painted black to fit the color scheme. The branding on the power supply was also
                                    covered up using black vinyl for a sleeker appearance. Finally, the cables were managed behind the side panels to minimize clutter. The build
                                    was now finished.
                                </p>
                                <p>
                                    Stress testing reveled that the computer remained cool and quiet under intense workloads. To further test the limits of the build, the CPU was
                                    overclocked to 5GHz, up from the 3.7GHz base boost-clock. In the process, the ABS pump bracket warped. The warping did not result in any leaks,
                                    so a new mounting bracket was not installed until it was time to perform maintenance on the cooling system two years later. At this time, a
                                    mounting bracket was manufactured out of AL6061-T6 on a milling machine. More on this on the &nbsp;
                                    <a href="./MountingBracket">mounting bracket</a> project page.
                                </p>
                            </div>
                        </div>
                        <div className="three-col-format-column">
                            <ul className="project-timeline">
                                <li className="project-timeline-event" data-date="October 5, 2017">
                                    <h3>The i7 8700K was launched.</h3>
                                    <p>So I bought one.</p>
                                </li>
                                <li className="project-timeline-event" data-date="January 6, 2018">
                                    <h3>A test bench was assmebled.</h3>
                                    <p>It was confirmed that the computed booted to BIOS.</p>
                                </li>
                                <li className="project-timeline-event" id="date" data-date="January 14, 2018">
                                    <h3>A mounting bracket for the pump was designed in CAD.</h3>
                                    <p>The following day, the mounting bracket was 3D printed out of ABS plastic.</p>
                                </li>
                                <li className="project-timeline-event" data-date="January 16, 2018">
                                    <h3>The liquid cooling loop was assembled.</h3>
                                    <p>PETG tubing was cut to shape and bent to complete the liquid cooling loop.</p>
                                </li>
                                <li className="project-timeline-event" data-date="January 29, 2018">
                                    <h3>The computer was finished.</h3>
                                    <p>The loop was flushed with distilled water before being filled with the coolant. It was then monitored for leaks.</p>
                                </li>
                                <li className="project-timeline-event" data-date="January 30, 2018">
                                    <h3>The computer was stress tested.</h3>
                                    <p>Software was used to assess the performance of the PC, resulting in outstanding numbers.</p>
                                </li>
                                <li className="project-timeline-event" data-date="January 30, 2018">
                                    <h3>The computer was overclocked.</h3>
                                    <p>This resulted in higher temperatures which warped the plastic mounting bracket.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="project-gallery">
                            <ImageGallery items={images}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PCBuild
