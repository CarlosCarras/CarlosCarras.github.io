const Max = {
    title: "Real-Time Rescue",

    date: "February 2, 2020",

    caption: "Swamphacks 2020 entry.",
    
    href: "/projects/rtrescue",
        
    images: [
        {alt: "Screenshot 1", src: require('./../../../assets/projects/swamphacks/rtrescue1.png')},
        {alt: "Screenshot 2", src: require('./../../../assets/projects/swamphacks/rtrescue2.png')},
        {alt: "Screenshot 3", src: require('./../../../assets/projects/swamphacks/rtrescue3.png')},
    ],

    description: (
        <>
            <p>
                Real-Time Rescue was a project undertaken by 
                <a href="https://www.linkedin.com/in/jaxnb/" target="_blank" rel="noopener noreferrer">Jaxon Brown</a>,&nbsp;
                <a href="https://www.linkedin.com/in/sean-minchin/" target="_blank" rel="noopener noreferrer">Sean Minchin</a>, 
                and Jonathan Lau
                as our submission for the SwampHacks VI hackathon (2020). The objective was to build 
                a hack to aid disaster relief efforts coastal cities. We ended up receiving Infinite 
                Energy's Best Hack Award. The website can be found here [note: the server running the 
                backend has since been suspended].
            </p>
            <p>
                The idea behind our hack was simple. The most common form of hurricane relief in the 
                United States is rescue via boat. However, boat rescues tend to be dangerous, as boat 
                owners tend to get stranded in areas of shallow water and often end up needed help 
                themselves. Furthermore, the process of collecting those that are stranded is extremely 
                inefficient and relies mostly on word-of-mouth. Real-Time Rescue aims to solve this 
                problem by creating an interface for the stranded and volunteers to communicate.
            </p>
            <p>
                Individual(s) in need of help can visit the website to seek relief. Once here, they can 
                enter minimal information and get their coordinates with the touch of a button. This 
                data is then submitted to the backend, which keeps track of the coordinates of all of 
                the submissions and the number of people stranded at each location. This is where the 
                volunteers come into play. Volunteers are able to report their current location (also 
                with the click of a button), their maximum carrying capacity, and the draft of their 
                boat (the vertical distance between the water level and the bottom of the hull). With 
                this measurement, the algorithm can compute the optimal path that a volunteer can take 
                to pick up the maximum number of passengers while ensuring that their boat does not 
                cross an area that is too shallow. This is done by taking the topological map of a city 
                (mainly the streets due to the possibility of obstacles) and subtracting it from the 
                height of the storm surge relative to the water level. As long as the difference of the 
                calculated value and the draft is positive (including a factor of safety), the boat can 
                traverse an area.
            </p>
            <p>
                Future improvements on this concept include giving boat owners the ability of entering 
                their boat model so that the backend can automatically determine the draft. The algorithm 
                itself (which is a travelling salesman problem) can also be further optimized.
            </p>
        </>
    ),
}

export default Max;