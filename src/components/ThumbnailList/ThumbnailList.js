import React from "react";
import "./ThumbnailList.css";


function ThumbnailList(props) {
    const data = props.data;

    return (
        <div className="thumbnail-list-container">
            {
                data.map((entry, i) => (
                    <div className="thumbnail-container" key={i}>
                        <div className="image-container">
                            <img src={entry.thumbnail} alt={entry.title}/>
                        </div>
                        <div className="thumbnail-description">
                            <h4>{entry.date}</h4>
                            <h3>{entry.title}</h3>
                            <span>{entry.caption}</span>
                                <a href={entry.href}>{entry.href ? "See More" : ""}</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ThumbnailList;