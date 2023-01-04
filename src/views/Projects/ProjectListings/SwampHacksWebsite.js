import React from 'react'
import ImageGallery from 'react-image-gallery'
import './../ProjectTemplate.css'

const RTRescueImg0 = require('./../../../assets/project-rtrescue0.png'),
      RTRescueImg1 = require('./../../../assets/project-rtrescue1.png'),
      RTRescueImg2 = require('./../../../assets/project-rtrescue2.png');

const images = [
  {
    original: RTRescueImg0
  },
  {
    original: RTRescueImg1
  },
  {
    original: RTRescueImg2
  },
];

class SwampHacksWebsite extends React.Component {
    render() {
        return(
          <div className="project-page-container">
              <h1>Real-Time Rescue</h1>
              <div className="project-body">
                  <div className="row">
                      <div className="three-col-format-column">
                          <div className="project-info-box">
                              <h2>RTRescue</h2>
                              <img src={RTRescueImg0} alt="RTTech Homescreen"/>
                              <div className="project-summary">
                                  <span className="project-field">Timeframe:&nbsp;</span>
                                  <span className="project-text">2 days</span>
                                  <br/>
                                  <span className="project-field">Team:&nbsp;</span>
                                  <span className="project-text"><a href="https://www.linkedin.com/in/jaxnb/" target="_blank" rel="noopener noreferrer">Jaxon Brown</a>,&nbsp;</span>
                                  <span className="project-text"><a href="https://www.linkedin.com/in/sean-minchin/" target="_blank" rel="noopener noreferrer">Sean Minchin</a>,&nbsp;</span>
                                  <span className="project-text">Jonathan Lau</span>
                                  <br/><br/>
                                  <span className="project-field">Equipment: </span>
                                  <ul>
                                      <li>React.js</li>
                                      <li>Node.js</li>
                                      <li>MongoDB</li>
                                      <li>Javascript</li>
                                      <li>HTML</li>
                                      <li>CSS</li>
                                      <li>Three.js</li>
                                      <li>Axios</li>
                                      <li>Willpower</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <div className="project-description">
                              <br/>
                              <p>
                                  Real-Time Rescue was a project undertaken by Jaxon Brown, Jonathan Lau, Sean Minchin as our submission for the SwampHacks VI hackathon (2020).
                                  The objective was to build a hack to aid disaster relief efforts coastal cities. We ended up receiving Infinite Energy's Best Hack Award. The
                                  website can be found <a href="http://rtrescue.tech/" target="_blank" rel="noopener noreferrer">here</a> [note: the server running the
                                  backend has since been suspended].
                              </p>
                              <p>
                                  The idea behind our hack was simple. The most common form of hurricane relief in the United States is rescue via boat. However, boat rescues
                                  tend to be dangerous, as boat owners tend to get stranded in areas of shallow water and often end up needed help themselves. Furthermore, the
                                  process of collecting those that are stranded is extremely inefficient and relies mostly on word-of-mouth. Real-Time Rescue aims to solve this
                                  problem by creating an interface for the stranded and volunteers to communicate.
                              </p>
                              <p>
                                  Individual(s) in need of help can visit the website to seek relief. Once here, they can enter minimal information and get their coordinates
                                  with the touch of a button. This data is then submitted to the backend, which keeps track of the coordinates of all of the submissions and the
                                  number of people stranded at each location. This is where the volunteers come into play. Volunteers are able to report their current location
                                  (also with the click of a button), their maximum carrying capacity, and the draft of their boat (the vertical distance between the water level
                                  and the bottom of the hull). With this measurement, the algorithm can compute the optimal path that a volunteer can take to pick up the maximum
                                  number of passengers while ensuring that their boat does not cross an area that is too shallow. This is done by taking the topological map of a
                                  city (mainly the streets due to the possibility of obstacles) and subtracting it from the height of the storm surge relative to the water level.
                                  As long as the difference of the calculated value and the draft is positive (including a factor of safety), the boat can traverse an area.
                              </p>
                              <p>
                                  Future improvements on this concept include giving boat owners the ability of entering their boat model so that the backend can automatically
                                  determine the draft. The algorithm itself (which is a travelling salesman problem) can also be further optimized.
                              </p>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <ul class="project-timeline">
                              <li class="project-timeline-event" data-date="January 31, 2020">
                                  <h3>Swamphacks 2020 began.</h3>
                                  <p>Coding officially began at 10:00:00 PM.</p>
                              </li>
                              <li class="project-timeline-event" data-date="February 1, 2020">
                                  <h3>Swamphacks 2020 began for us.</h3>
                                  <p>We decided to sleep the previous night. It had been a busy week.</p>
                              </li>
                              <li class="project-timeline-event" data-date="Febrary 2, 2020">
                                  <h3>SwampHacks 2020 ended.</h3>
                                  <p>We demoed our project and received Infinite Energy's Best Hack award. Special Thanks to Infinite Energy for sponsoring SwampHacks!</p>
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

export default SwampHacksWebsite
