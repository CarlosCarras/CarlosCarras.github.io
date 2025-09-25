const Bracket = {
    title: "Pump Bracket",

    date: "November 2, 2019",

    caption: "Milled mounting bracket for a cooling pump.",
    
    href: "/projects/bracket",
        
    images: [
        {alt: "Image 2", src: require('./../../../assets/projects/bracket/mounting_bracket2.jpg')},
        {alt: "Image 1", src: require('./../../../assets/projects/bracket/mounting_bracket1.jpg')},
        {alt: "Image 3", src: require('./../../../assets/projects/bracket/mounting_bracket3.jpg')},
    ],

    description: (
        <>
            <p>
                While stress testing the overclocked&nbsp;
                <a href="/projects/custom-pc">PC Build</a>, 
                the ABS plastic used to 3D print the 
                pump mounting bracket warped. The warping did not result in any leaks, so a new 
                mounting bracket was not installed until it was time to perform maintenance on the 
                cooling system two years later. At this time, it was determined that a material with a 
                higher melting point had to be used to prevent future failures. A more aesthetically 
                pleasing material was also desired. It was decided that the mounting bracket would be 
                manufactured out of a solid block of AL6061-T6, machined to have a smooth and 
                reflective outer surface.
            </p>
            <p>
                A 1in x 4in x 5in block of aluminum was bought from McMaster Carr and milled down to 
                shape by using a Bridgeport machine. Due to the rigidity of the aluminum, more material 
                could be removed than the ABS plastic counterpart, allowing for more airflow into the 
                lower radiator. The machined part was then finished with a polish to increase the 
                reflectivity of the surface.
            </p>
        </>
    ),
}

export default Bracket;