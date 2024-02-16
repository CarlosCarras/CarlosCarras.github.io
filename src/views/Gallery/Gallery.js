import React from "react";
import "./Gallery.css"


const IMAGE_DATA = [
        {   
            name: "Longboard", 
            caption: "My favorite way to get around 🛹", 
            link: "",
            src: require('./../../assets/gallery/longboard.jpg')
        },
        {   
            name: "Pump Bracket", 
            caption: "A pump bracket that I manufactured for my custom-built computer.", 
            link: "/projects/bracket",
            src: require('./../../assets/projects/bracket/mounting_bracket1.jpg')
        },
        {   
            name: "Skiing @ Breckenridge ⛷️", 
            caption: "with Marilyn and Mark", 
            link: "",
            src: require('./../../assets/gallery/skiing.JPG')
        },
        {   
            name: "Miami Heat vs. GSW 🏀", 
            caption: "with Marilyn.", 
            link: "",
            src: require('./../../assets/gallery/miamiheat.JPG')
        },
        {   
            name: "Welding Practice 💥", 
            caption: "with Julia", 
            link: "",
            src: require('./../../assets/gallery/welding.JPG')
        },
        {   
            name: "Zipling @ Toro Verde", 
            caption: "with my dad, (also) Carlos", 
            link: "",
            src: require('./../../assets/gallery/zipline.jpg')
        },
        {   
            name: "My Drumset 🥁", 
            caption: "Drumming is my favorite hobby. This is my Gretsch drumkit with Evans heads and Sabian cymbals.", 
            link: "",
            src: require('./../../assets/gallery/drumset.jpg')
        },
        {   
            name: "Marching Tenors @ Steinbrenner High School 🥁", 
            caption: "", 
            link: "",
            src: require('./../../assets/gallery/steinbrenner_drumline.JPG')
        },
        {   
            name: "Marching Snare @ Tech 🥁", 
            caption: "GT Drumline 2023", 
            link: "",
            src: require('./../../assets/gallery/gt_drumline_1.png')
        },
        {   
            name: "GT vs. Louisville @ Mercedez Benz", 
            caption: "", 
            link: "",
            src: require('./../../assets/gallery/gt_drumline_2.png')
        },
        {   
            name: "Snowboarding @ Breckenridge 🏂", 
            caption: "with Marilyn and Mark", 
            link: "",
            src: require('./../../assets/gallery/snowboarding.png')
        },
        {   
            name: "2nd Custom PC ⚡", 
            caption: "for the first one, click below.", 
            link: "/projects/custom-pc",
            src: require('./../../assets/gallery/pcbuild2.jpg')
        },
        {   
            name: "Flying  in San Juan ✈️", 
            caption: "currently pursing my private pilot license.", 
            link: "",
            src: require('./../../assets/gallery/flying.jpg')
        },
        {   
            name: "Checking out a Cave 👷", 
            caption: "@ Las Cavernas del Rio Camuy", 
            link: "",
            src: require('./../../assets/gallery/caving.jpg')
        },
        {   
            name: "Basektball @ UF's Student Rec 🏀", 
            caption: "my favorite sport", 
            link: "",
            src: require('./../../assets/gallery/basketball.png')
        },
        {   
            name: "Bouldering @ Vertical Ventures 🧗", 
            caption: "one of my favorite hobbies", 
            link: "",
            src: require('./../../assets/gallery/climbing.jpg')
        },
        {   
            name: "Garden of the Gods", 
            caption: "with Marilyn and Mark", 
            link: "",
            src: require('./../../assets/gallery/gardenofthegods.JPG')
        },
        {   
            name: "My Exoskeleton Platform", 
            caption: "device design led by Aakash Bajpai", 
            link: "",
            src: require('./../../assets/gallery/exo.png')
        },
        {   
            name: "Raytheon's Finest", 
            caption: "Raytheon Interns, Summer 2021", 
            link: "",
            src: require('./../../assets/gallery/raytheon_interns.JPG')
        },
        {   
            name: "DART Lab", 
            caption: "Winter Social, 2021", 
            link: "",
            src: require('./../../assets/gallery/dart.jpg')
        },
        {   
            name: "EPIC Lab", 
            caption: "Summer Retreat, 2023", 
            link: "",
            src: require('./../../assets/gallery/epic.jpg')
        },
        {   
            name: "NASA JPL", 
            caption: "One of my favorite places in the world. Shoutout to Marilyn for the tour!", 
            link: "",
            src: require('./../../assets/gallery/jpl.JPG')
        },
        {   
            name: "Football @ The Swamp 🏈", 
            caption: "with Jonathan, Matteo, and Jaxon", 
            link: "",
            src: require('./../../assets/gallery/swamp.PNG')
        },
        {   
            name: "Mi Familia", 
            caption: "during Christmas @ Tampa", 
            link: "",
            src: require('./../../assets/gallery/family.jpg')
        },
        {   
            name: "Swamphacks Award Ceremony", 
            caption: "we won Infinite Energy's Best Hack!", 
            link: "",
            src: require('./../../assets/gallery/swamphacks.jpg')
        },
        {   
            name: "DML Group 8B", 
            caption: "(I was the TA)", 
            link: "",
            src: require('./../../assets/gallery/dml_8B.JPG')
        },
        {   
            name: "DML Group 1D", 
            caption: "(My group)", 
            link: "",
            src: require('./../../assets/gallery/dml_1D.JPG')
        },
        {   
            name: "Numerical Methods TA Dinner", 
            caption: "Thank you Dr. Brooks!", 
            link: "",
            src: require('./../../assets/gallery/ta_dinner.jpg')
        },
        {   
            name: "Garita", 
            caption: "One of my island's most recognizable symbols.", 
            link: "",
            src: require('./../../assets/gallery/garita.jpg')
        },
]


function Gallery() {
    return (
        <div className="gallery-container">
            {
                IMAGE_DATA.map((entry, index) => (
                    <div className="box" key={index}>
                        <img src={entry.src} alt={entry.name}/>
                        <div className="description">
                            <h3>{entry.name}</h3>
                            <p>{entry.caption}</p>
                            <a href={entry.link}>{entry.link ? "Read More" : ""}</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery;