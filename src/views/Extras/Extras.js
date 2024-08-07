import React from "react";
import "./Extras.css"

import ThumbnailList from "../../components/ThumbnailList/ThumbnailList";


const EXTRAS_DATA = [
    {
        date: "July 14, 2024", 
        title: "NDSEG 2024",
        caption: "5th annaul NDSEG conference, New Orleans.",
        thumbnail: require("./../../assets/extras/ndseg2024/ndseg2024_thumbnail.png"),
        href: "/extras/ndseg2024",
    },
    {
        date: "April 17, 2024", 
        title: "CS8750 Showcase",
        caption: "IRIM robotics research showcase, spring 2024.",
        thumbnail: require("./../../assets/extras/irim/cs8750_thumbnail.png"),
        href: "/extras/cs8750",
    },
    {
        date: "August 8, 2023", 
        title: "Drumline Audition",
        caption: "2023 GT Drumline snare & tenor audition.",
        thumbnail: require("./../../assets/extras/gtaudition/audition_thumbnail.png"),
        href: "/extras/gtaudition",
    },
    {
        date: "August 8, 2023", 
        title: "ASB 2023",
        caption: "American Society of Biomechanics, Knoxville.",
        thumbnail: require("./../../assets/extras/asb2023/asb2023_thumbnail.png"),
        href: "/extras/asb2023",
    },
]


function Extras() {
    return (
        <div className="extras-container">
            <ThumbnailList data={EXTRAS_DATA}/>
        </div>
    )
}

export default Extras;