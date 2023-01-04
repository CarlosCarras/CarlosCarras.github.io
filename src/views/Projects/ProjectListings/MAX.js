import React from 'react'
import ImageGallery from 'react-image-gallery'
import './../ProjectTemplate.css'

const MAXImg0 = require('./../../../assets/project-MAX-print.jpg'),
      MAXImg1 = require('./../../../assets/project-MAX-cad.png'),
      MAXImg2 = require('./../../../assets/project-MAX-pcb.jpg'),
      MAXImg3 = require('./../../../assets/project-MAX-altium.png'),
      MAXImg4 = require('./../../../assets/project-MAX-battery.png');

const images = [
  {
    original: MAXImg0
  },
  {
    original: MAXImg1
  },
  {
    original: MAXImg2
    },
  {
    original: MAXImg3
  },
  {
    original: MAXImg4
  }
];

class MAX extends React.Component {
    render() {
        return(
          <div className="project-page-container">
              <h1>Multi-AXial robot</h1>
              <div className="project-body">
                  <div className="row">
                      <div className="three-col-format-column">
                          <div className="project-info-box">
                              <h2>MAX</h2>
                              <img src={MAXImg0} alt="finished mounting bracket"/>
                              <div className="project-summary">
                                  <span className="project-field">Timeframe:&nbsp;</span>
                                  <span className="project-text">6 weeks</span>
                                  <br/><br/>
                                  <span className="project-field">BOM: </span>
                                  <ul>
                                        <li>4X Lithium-Polymer 3.7V, 2000mAh</li>
                                        <li>ICM-20948</li>
                                        <li>MIC5355-JGYMME</li>
                                        <li>PCA9658 Controller IC</li>
                                        <li>0603 SMD Resistor Kit</li>
                                        <li>1206 SMD Capacitor Kit</li>
                                        <li>2X 2x20-pin Female Stacking Header</li>
                                        <li>20A Latching LED Pushbutton</li>
                                        <li>4X MG996R</li>
                                        <li>Raspberry Pi 4</li>
                                        <li>Xbox One Bluetooth Controller</li>
                                        <li>XL6009 DC Boost Converter</li>
                                        <li>Adafruit AMG8833 IR Thermal Camera</li>
                                  </ul>
                                  <span className="project-field">Equipment: </span>
                                  <ul>
                                      <li>3D Printer with Filament</li>
                                      <li>Soldering Iron</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <div className="project-description">
                              <br/>
                              <p> Meet MAX, a 12-degree of freedom quadruped robot capable of stabilization and locomotion in three
                                  dimensions. The current robot uses servo motors as the actuators, a 3D printed structure, and a Raspberry
                                  Pi 4 running Ubuntu for the finite state machine. It uses a 9-axis IMU for closed-loop PID control, which
                                  can be used to correct the position of the robot when external loadings are applied. It uses a custom-designed
                                  PCB to house the PWM, IMU, and power delivery integrated circuits and relevant control
                                  signals. When finished, the robot will have multiple programmable gaits and a thermal camera that will
                                  allow it to steer towards or away from hot spots based on the control algorithm. This project has provided
                                  immensely valuable insight on robot geometry (namely inverse kinematics), the derivations of roll, yaw,
                                  and pitch angles from IMU data, and the design of PCB’s. The process has also provided me with a clear
                                  development path for the robot. Mechanically, I plan on using more capable actuators, designing a
                                  machinable structure, and adding waterproofing to allow for amphibious locomotion. Electrically, I plan
                                  on upgrading the onboard computer to a microcontroller running a real-time operating system, adding
                                  foot sensors for floor detection, implementing more robust control algorithms, and adding automation
                                  using time-of-flight sensors (among others).
                              </p>
                               <p> This was my design project for EEL4924C Electrical Engineering Capstone Design 2. If given permission, I will
                                   add more information about the code, the schematics, the model, and the bill of materials. 
                              </p>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <ul class="project-timeline">
                              <li class="project-timeline-event" data-date="September 10, 2020">
                                  <h3>Coming Soon</h3>
                                  <p>The timeline will be updated soon.</p>
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

export default MAX
