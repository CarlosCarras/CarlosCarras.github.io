const Max = {
    title: "MAX",

    date: "December 10, 2020",

    caption: "A quadruped robot.",
    
    href: "/projects/max",
        
    images: [
        {alt: "3D Print", src: require('./../../../assets/projects/max/max_print.jpg')},
        {alt: "PCB", src: require('./../../../assets/projects/max/max_pcb.jpg')},
        {alt: "Altium", src: require('./../../../assets/projects/max/max-altium.png')},
        {alt: "CAD", src: require('./../../../assets/projects/max/max_cad.png')},
    ],

    description: (
        <>
            <p>
                {/* <b>Disclosure</b>: This was my design project for EEL4924C Electrical Engineering Capstone Design 2.   */}
            </p>

            <p>
                Meet MAX, a 12-degree of freedom quadruped robot capable of stabilization and locomotion in three dimensions. 
                The current robot uses servo motors as the actuators, a 3D printed structure, and a Raspberry Pi 4 running 
                Ubuntu for the finite state machine. It uses a 9-axis IMU for closed-loop PID control, which can be used to 
                correct the position of the robot when external loadings are applied. It uses a custom-designed PCB to house 
                the PWM, IMU, and power delivery integrated circuits and relevant control signals. The robot has
                multiple programmable gaits and a thermal camera that allow it to steer towards or away from hot spots using
                an implementation of Vector Field Histograms (VFH). 
            </p>
        </>
    ),
}

export default Max;