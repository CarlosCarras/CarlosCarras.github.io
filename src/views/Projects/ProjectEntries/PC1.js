const PC1 = {
    title: "Custom PC",

    date: "January 30, 2018",

    caption: "A custom-loop watercooled PC.",
    
    href: "/projects/custom-pc",
        
    images: [
        {alt: "pc image 4", src: require('./../../../assets/projects/pc1/pc_build4.JPG')},
        {alt: "pc image 0", src: require('./../../../assets/projects/pc1/pc_build0.JPG')},
        {alt: "pc image 1", src: require('./../../../assets/projects/pc1/pc_build1.JPG')},
        {alt: "pc image 2", src: require('./../../../assets/projects/pc1/pc_build2.JPG')},
        {alt: "pc image 3", src: require('./../../../assets/projects/pc1/pc_build3.JPG')},
        {alt: "pc image 5", src: require('./../../../assets/projects/pc1/pc_build5.JPG')},
        {alt: "pc image 6", src: require('./../../../assets/projects/pc1/pc_build6.JPG')},
    ],

    description: (
        <>
            <span>Bill of Materials:</span>
            <ul>
                <li><b>CPU</b>: Intel i7 8700K</li>
                <li><b>GPU</b>: Gigabyte Aorus 1080ti</li>
                <li><b>Motherboard</b>: Asus Strix Z370i</li>
                <li><b>RAM</b>: 16GB GSkill 3600 RAM</li>
                <li><b>PSU</b>: Silverstone SF600 PSU</li>
                <li><b>Case</b>: Phanteks Shift</li>
            </ul>
            <span>Watercooling Gear:</span>
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
            <p>
                On October 2, 2017, I took a SolidWorks certification exam on my laptop. After spending about five minutes 
                attempting to make the Cartesian planes visible, SolidWorks crashed on my laptop. I repeated the same 
                process within the next hour, never getting any further than a few sketches and a few extrusions. I left 
                the testing hall that day without a certification, but with a determination to build my own computer that 
                could carry me through the rest of my undergraduate courseload. 
            </p>
            <p>
                I started looking into the hardware by using analytics from independent testers on websites like YouTube 
                and Reddit. To future-proof my system, I settled on an i7 8700K as my CPU and a 1080ti as my GPU. I also 
                wanted a very unique look to my build. I was very into small form-factor builds, so I selected a Phanteks 
                Shift case. A little bit of research revealed that nobody had attempted to build a hardline liquid cooling 
                system in this case. So I decided to build a hardline liquid cooling system in the Phanteks Shift.
            </p>
            <p>
                Because this case was not designed to fit a watercooling loop, building this computer turned out to be 
                rather complicated. Two radiators were installed for maximum heat dissipation; these were press-fit into 
                the lower half of the case. A custom mounting bracket had to be designed to fit the pump in the case. This 
                bracket was 3D printed out of ABS plastic (this decision had negative consequences - more on this later). 
                Furthermore, a reservoir couldn't be mounted onto the case, so an external reservoir was used during the
                filling process.
            </p>
            <p>
                The 120mm Noctua fan, originally brown in color, was spray painted black to fit the color scheme. The branding 
                on the power supply was also covered up using black vinyl for a sleeker appearance. Finally, the cables were 
                managed behind the side panels to minimize clutter. The build was now finished.
            </p>
            <p>
                Stress testing reveled that the computer remained cool and quiet under intense workloads. To further test 
                the limits of the build, the CPU was overclocked to 5GHz, up from the 3.7GHz base boost-clock. In the 
                process, the ABS pump bracket warped. The warping did not result in any leaks, so a new mounting bracket was 
                not installed until it was time to perform maintenance on the cooling system two years later. At this time, 
                a mounting bracket was manufactured out of AL6061-T6 on a milling machine. More on this on 
                the <a href='/projects/bracket'>mounting bracket</a> project page.
            </p>

            <p>
                Special shoutout to 
                <a href="https://www.linkedin.com/in/jaxnb/" target="_blank" rel="noopener noreferrer">Jaxon Brown</a> 
                for the help and advice!
            </p>
        </>
    ),
}

export default PC1;