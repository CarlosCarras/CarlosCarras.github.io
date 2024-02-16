import React from "react";
import "./Extras.css"

import ThumbnailList from "../../components/ThumbnailList/ThumbnailList";


const EXTRAS_DATA = [
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
        caption: "American Society of Biomechanics 2023.",
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