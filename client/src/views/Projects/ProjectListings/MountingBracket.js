import React from 'react'
import ImageGallery from 'react-image-gallery'
import './../ProjectTemplate.css'

const BracketImg0 = require('./../../../assets/project-mounting_bracket0.jpg'),
      BracketImg1 = require('./../../../assets/project-mounting_bracket1.JPG'),
      BracketImg2 = require('./../../../assets/project-mounting_bracket2.JPG');

const images = [
  {
    original: BracketImg0
  },
  {
    original: BracketImg1
  },
  {
    original: BracketImg2
  },
];

class MountingBracket extends React.Component {
    render() {
        return(
          <div className="project-page-container">
              <h1>Mounting Bracket</h1>
              <div className="project-body">
                  <div className="row">
                      <div className="three-col-format-column">
                          <div className="project-info-box">
                              <h2>Mounting Bracket</h2>
                              <img src={BracketImg1} alt="finished mounting bracket"/>
                              <div className="project-summary">
                                  <span className="project-field">Timeframe:&nbsp;</span>
                                  <span className="project-text">2 days</span>
                                  <br/><br/>
                                  <span className="project-field">BOM: </span>
                                  <ul>
                                      <li>AL6061-T6 Extrusion, 1in x 4in x 5in</li>
                                  </ul>
                                  <span className="project-field">Equipment: </span>
                                  <ul>
                                      <li>Milling Machine</li>
                                      <li>Drill Bit Set</li>
                                      <li>1 1/2" Roughing Endmill</li>
                                      <li>1/2" Finishing Endmill</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <div className="project-description">
                              <br/>
                              <p>
                                  While stress testing the overclocked <a href="./PCBuild">PC Build</a>, the ABS plastic used to 3D print the pump mounting bracket warped.
                                  The warping did not result in any leaks, so a new mounting bracket was not installed until it was time to perform maintenance on the cooling
                                  system two years later. At this time, it was determined that a material with a higher melting point had to be used to prevent future
                                  failures. A more aesthetically pleasing material was also desired. It was decided that the mounting bracket would be manufactured out of a
                                  solid block of AL6061-T6, machined to have a smooth and reflective outer surface.
                              </p>
                              <p>
                                  A 1in x 4in x 5in block of aluminum was bought from McMaster Carr and milled down to shape by using a Bridgeport machine. Due to the rigidity
                                  of the aluminum, more material could be removed than the ABS plastic counterpart, allowing for more airflow into the lower radiator. The
                                  machined part was then finished with a polish to increase the reflectivity of the surface.
                              </p>
                              <p>
                                  The mounting bracket was then installed into the PC Build the following day.
                              </p>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <ul class="project-timeline">
                              <li class="project-timeline-event" data-date="January 30, 2018">
                                  <h3>The computer was overclocked.</h3>
                                  <p>This resulted in higher temperatures which warped the plastic mounting bracket.</p>
                              </li>
                              <li class="project-timeline-event" data-date="November 1, 2019">
                                  <h3>The PC was taken apart for maintenance.</h3>
                                  <p>The liquid coolant was emptied out and the pump was removed.</p>
                              </li>
                              <li class="project-timeline-event" data-date="November 1, 2019">
                                  <h3>The mounting bracket was manufactured.</h3>
                                  <p>The block of aluminum was milled down to shape and finished with a polish.</p>
                              </li>
                              <li class="project-timeline-event" data-date="November 2, 2019">
                                  <h3>The mounting bracket was installed.</h3>
                                  <p>The PC was then flushed with distilled water and refilled with pastel coolant.</p>
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

export default MountingBracket
