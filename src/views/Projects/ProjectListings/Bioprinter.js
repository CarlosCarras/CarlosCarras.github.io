import React from 'react'
import ImageGallery from 'react-image-gallery'
import './../ProjectTemplate.css'

const BioImg0 = require('./../../../assets/project-bioprinter-full.png'),
      BioImg1 = require('./../../../assets/project-bioprinter-head.png'),
      BioImg2 = require('./../../../assets/project-bioprinter-poster.png');

const images = [
    {
        original: BioImg2
    },
    {
        original: BioImg0
    },
    {
        original: BioImg1
    }
];

class Bioprinter extends React.Component {
    render() {
        return (
            <div className="project-page-container">
                <h1>3D Bioprinter</h1>
                <div className="project-body">
                    <div className="row">
                        <div className="three-col-format-column">
                            <div className="project-info-box">
                                <h2>3D Bioprinter</h2>
                                <img src={BioImg1} alt="finished mounting bracket" />
                                <div className="project-summary">
                                    <span className="project-field">Timeframe:&nbsp;</span>
                                    <span className="project-text">6 weeks</span>
                                    <br />
                                    <span className="project-field">Team:&nbsp;</span>
                                    <span className="project-text">Marilyn Braojos, Nicolas Camejo, Isaac Corcoran, Jose Medina, Lorayne Reyes Pajon</span>
                                    <br /><br />
                                    <span className="project-field">BOM: </span>
                                    <ul>
                                        <li>Unfortunately, these cannot be listed because this build was designed as part of
                                            a senior design project. This information is property of UF.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="three-col-format-column">
                            <div className="project-description">
                                <br />
                                <p> The Printology 3D bioprinter was designed with the objective of capturing the group’s passion for product versatility
                                    and proclivity for user-friendliness while minimizing cost. The product’s quality was not compromised at the expense
                                    of reducing cost. The printer aims to use the same connectors, fasteners, and components throughout to facilitate user
                                    repairs and adjustments, unless otherwise necessary.
                                </p>
                                <p> The bioprinter’s cell delivery and retraction operations are performed by two separate mechanisms. At the printing
                                    interface, two separate 25 gauge needles spaced 10 mm apart parallel to one another on the print head were utilized for
                                    the two mechanisms to prevent potential cross-contamination during successive deposition and retraction operations.
                                    The two different needles’ connection to their respective 70 mm long syringe occurs via custom luer attachments. To
                                    ensure that only one needle was in the print medium at any given time, a pneumatic mechanism that induces motion in
                                    the z-direction was added to both of the syringes. The pneumatic mechanism applies a constant pressure of 0.4 MPa to
                                    the spring that lowers the syringe into its printing position. At its equilibrium position, the spring is not compressed and
                                    the syringe is in its enclosure. When the spring is compressed, the syringe is lowered in the z-direction to print. The
                                    syringes contain threads in the top 4.69 mm of their respective lengths to facilitate the connection to the pneumatic
                                    mechanism’s piston. The syringes have an inner diameter of 9 mm. The piston heads contain a barbed attachment that
                                    connects to the PVC tubing.
                                </p>
                                <p> The print head was inspired by delta 3D-printer print head designs. The motion of the print head is achieved
                                    using hydraulic cylinders to reduce vibrations caused by motors and other electro-mechanical actuators. Three vertical
                                    hydraulic cylinders with a stroke of 20 mm are placed 120 apart along the dovetail axis. At the base of the hydraulic
                                    cylinders are two 22 mm diagonal rod connections per cylinder that magnetically attach to the base of the print head.
                                    The hydraulic cylinders contain water as their moving fluid, and are intended to be primed prior to product delivery to
                                    the customer. The syringes and their respective pneumatic system are independently housed in 3-D printed enclosures
                                    that are intended to be laser welded together. The enclosures are attached to the print head base using compact captive
                                    pins. A cantilever beam effect on the pins’ flanges allows for the separation of the joint enclosures from the print head
                                    base to facilitate syringe replacement. The print head’s maximum print extent was evaluated using MATLAB. Its stroke
                                    and rod length were heavily considered parameters and it was determined to have the ability to print 7 mm in the x and y
                                    plane, and 15.5 mm in the z-direction. The print head’s dimensions were assessed and evaluated to be 84.45 mm X
                                    84.45 mm X 73.04 mm with both syringes retracted into their encasing. The print head’s overall weight consisted of
                                    198 g. Calibration of the print head was meticulously evaluated. To maximize user-friendliness, calibration is intended
                                    to be achieved by adding a custom coarse adjustment knob with an encoder that reports the position of the stage relative
                                    to the microscope dovetail.
                                </p>
                                <p> The fluid transportation system covers the fluids necessary for any operation in the bioprinter, including both the
                                    print material and the fluids necessary to actuate the systems mounted to the microscope dovetail. Two DC 12V Micro
                                    Vacuum Pumps from Amazon were selected to drive the pneumatic mechanisms threaded in the cell deposition and
                                    retraction syringes, respectively. The pumps are to pressurize the spring with 0.4 MPa to induce the movement of the
                                    syringes into their printing position. The print head’s hydraulic cylinders are operated with three M410K water pumps.
                                    With a 12 V power input, the pump’s maximum achievable flow rate is 1150 mL/min and a maximum pressure of 380
                                    mBar. As a result, the needle is capable of achieving a maximum traveling velocity of 25 mm/s. The manufacturer,
                                    TCS, was contacted to ensure that the water pumps are self-sealing and the team is awaiting their response. Self-sealing
                                    pumps prevent the system’s position from changing when the pumps are shut off, making the system more robust.
                                    During the initial phases of the design process, a literature review found that micro-pumps and piston actuators work
                                    best for deposition and retraction, respectively. Both of these systems were realized in the final design. An M200-180-V
                                    TCS micro-pump was selected to meet the printing resolution and quality desired. With a 3 V power input, the pump’s
                                    maximum flow rate is 700 mL/min and a maximum pressure of 230 mBar. The bioink’s flow rate is more accurately
                                    controlled by the rotor’s rotational speed in contrast to its other mechanically or pneumatically driven options. A
                                    pump-driven deposition fluid transport system significantly decreases shear rates on the print material as well. The
                                    ability to "pull back" and create a negative pressure gradient was deemed more effective in piston-driven mechanisms
                                    to enable fluid retraction. A belt-driven system was designed to vertically adjust the syringe’s plunger’s movements
                                    during retraction operations. The belt and the syringe’s plunger are joined by a clip that can slot in the belt with sheet
                                    metal clamps to prevent the clip from slipping. The retraction belt-driven system is actuated with a NEMA 17 stepper
                                    motor. Tension on the belt at all times is moderated via a tensioner. Off-the-shelf disposable 10 mL polypropylene
                                    syringes were used as the fluid reservoirs for both, the deposition and retraction, systems. Both syringes’ connections to
                                    the tubing was created using luer-lock to barbed fittings with a valve. Priming of the tubing lines is expected to be
                                    achieved with a silicone-based or mineral oil, based on user preference. The tubing is expected to be up to 10 ft in
                                    length to ensure that fluid movement can be transmitted from a remote source, but this feature is variable depending
                                    on customer preference. To enhance user-friendliness, quick-disconnect barbed fittings were used for all other fluid
                                    transport connections. The quick-disconnect plugs and their respective sockets were marked with a colored ring decal to
                                    ensure that all quick-disconnect plugs are connected to their respective quick-disconnect sockets.
                                </p>
                                <p> The electronics, fluid reservoirs, pumps and motors responsible for the print head operation and fluid transportation
                                    were stored in a 196.89 mm X 150.09 mm X 321.2 mm remote enclosure. Additional space in the remote mount was
                                    also allocated to the Smoothieboard 5X, a power supply, and fans for cooling. The power supply is positioned so that
                                    if fluid of any kind were to leak, it would not reach the leads. The Smoothieboard 5X is capable of having 6 FET
                                    components and 5 stepper components. The 6 FET components are used in this design to establish connections with
                                    the micro-pump transporting the printing material, the 3 micro-pumps connected to the hydraulic cylinders and the 2
                                    air pumps for the pneumatic mechanisms. Only 1 stepper component of the Smoothieboard is used for the NEMA 17
                                    stepper motor. The remote systems’ enclosure’s temperature from the electrical components was considered to reach or
                                    exceed 40.5, which marks the temperature of cell necrosis. Two 4-pin PWM-operated fans are included in the remote
                                    systems’ enclosure to ensure temperature regulation. The user-interface panel consists of an Ender 3 LCD display screen
                                    with a potentiometer that can be pushed and rotated to enhance user interaction. The remote enclosure contains two
                                    see-through acrylic panels where the user can access the pumps, fans, and reservoirs. The panels are capable of opening,
                                    and they are magnetically closed.
                                </p>
                            </div>
                        </div>
                        <div className="three-col-format-column">
                            <ul class="project-timeline">
                                <li class="project-timeline-event" data-date="May 30, 2020">
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

export default Bioprinter
