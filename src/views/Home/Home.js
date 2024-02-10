import React, {useState} from "react";
import Typewriter from "typewriter-effect"
import "./Home.css"

import Slideshow from "./Slideshow/Slideshow"
import Terminal from "./../../components/Terminal/Terminal"

const IMAGE_DATA = [
    {src: require('./../../assets/slideshow/image1.png'), alt: "Image 1"}
]


function Home() {

    const [isLoaded, setIsLoaded] = useState(
        typeof window !== "undefined"
            ? sessionStorage.getItem("isLoaded") || false
            : false
    )

    return(
        <div className="home-container">
            <div className="row">
                <div className="name-card">
                    👋 Hi, I am
                    <h1>
                        {isLoaded ? 
                            (
                                <>
                                    <span>Carlos</span> 
                                    <br/>
                                    <span>Carrasquillo</span>
                                </>
                            ) : 
                            (
                            <Typewriter
                                style={{ marginTop: 0, paddingTop: 0 }}
                                options={{
                                    deleteSpeed: "natural",
                                    delay: 75
                                }}
                                onInit={typewriter => {
                                    typewriter
                                    // .typeString("Software Developer")
                                    // .pauseFor(2500)
                                    // .deleteAll()
                                    .typeString("Carlos<br>Carrasquillo")
                                    .callFunction(() => {
                                        setIsLoaded(true)
                                    })
                                    .start()
                                }}
                            />
                            )
                        }
                            
                    </h1>
                </div>
                <div className="picture-container slideshow">
                    <Slideshow data={IMAGE_DATA[0]}/>
                </div>
            </div>
            <div className="row">
                <Terminal top={400} left={400}/>
            </div>
        </div>
    )
}

export default Home;