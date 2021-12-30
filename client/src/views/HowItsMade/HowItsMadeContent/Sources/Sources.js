import React from 'react';
import './Sources.css'

class Sources extends React.Component {
    render() {
        return(
            <div className="sources-section" id="sources">
                <h1><code>{'<h1> '}</code>Sources<code>{' </h1>'}</code></h1>
                <ul className="source-list">

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The name appearing animation in the Home tab.</span><br/>
                    <li>Ed, Dev, creator. <span className="italic-text">SVG Animation With Text Tutorial | HTML CSS. YouTube</span>, 5 Dec. 2018,&nbsp;
                        <a href="http://www.youtube.com/watch?v=vJNVramny9k" target="_blank" rel = "noopener noreferrer">www.youtube.com/watch?v=vJNVramny9k</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The animated arrow linking to the About Me section.</span><br/>
                    <li>Naoya. “Demo: CSS Scroll down Button.”<span className="italic-text">CodePen</span>, 2019, &nbsp;
                        <a href="http://www.codepen.io/nxworld/pen/OyRrGy" target="_blank" rel = "noopener noreferrer">codepen.io/nxworld/pen/OyRrGy</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The Draggable.js function used to create the sticky note in the Resume tab.</span><br/>
                    <li>anyhotcountry. “Recommended Way of Making React Component/Div Draggable.”<span className="italic-text">Stack Overflow</span>Stack Overflow, 18 Mar. 2018, &nbsp;
                        <a href="http://www.stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable" target="_blank" rel = "noopener noreferrer">stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The validated form for submitting emails in the Contact Me tab.</span><br/>
                    <li>Ayres, Brice, creator. <span className="italic-text">React Form Validation Tutorial. YouTube</span>, 15 Sept. 2018, &nbsp;
                        <a href="http://www.youtube.com/watch?v=4CeTFW4agRw" target="_blank" rel = "noopener noreferrer">www.youtube.com/watch?v=4CeTFW4agRw</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The photo gallery in the Gallery tab.</span><br/>
                    <li>“Css Image Hover Effects - Pure Css Tutorial - How To Create Image Hover Overlay Effects.” <span className="italic-text">YouTube</span>, Online Tutorials, 25 Mar. 2018, &nbsp;
                        <a href="http://www.youtube.com/watch?v=ltxxNidblts&amp;feature=youtu.be" target="_blank" rel = "noopener noreferrer">www.youtube.com/watch?v=ltxxNidblts&amp;feature=youtu.be</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The dropdown accordion in the FAQ page.</span><br/>
                    <li>Julio Codes, creator<span className="italic-text">. Responsive FAQ Accordion Dropdown | HTML and CSS Tutorial. YouTube</span>, 11 Aug. 2019, &nbsp;
                        <a href="http://www.youtube.com/watch?v=MXrtXg1kpVs" target="_blank" rel = "noopener noreferrer">www.youtube.com/watch?v=MXrtXg1kpVs</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The photo gallery showcasing the development suite in the How It's Made tab.</span><br/>
                    <li>Madra, Pali. “HTML CSS Photo Gallery.”&nbsp;<span className="italic-text">CodePen</span>, 2019, &nbsp;
                        <a href="http://www.codepen.io/palimadra/pen/uhDec" target="_blank" rel = "noopener noreferrer">codepen.io/palimadra/pen/uhDec</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The photo gallery showcasing the coding process in the How It's Made tab.</span><br/>
                    <li>Cukuren, Mert. “Image Hover Effect — Week 10/52.”<span className="italic-text">CodePen</span>, 2019, &nbsp;
                        <a href="http://www.codepen.io/knyttneve/pen/YgZbLO" target="_blank" rel = "noopener noreferrer">codepen.io/knyttneve/pen/YgZbLO</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The photo gallery showcasing the coding process in the How It's Made tab.</span><br/>
                    <li>Rishabh. “Large Pressable CSS Button.”<span className="italic-text">CSSDeck</span>, 2019, &nbsp;
                        <a href="http://www.cssdeck.com/labs/large-pressable-css-button" target="_blank" rel = "noopener noreferrer">cssdeck.com/labs/large-pressable-css-button</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The ordered list in the ~/Projects directory.</span><br/>
                    <li>Sullivan, Erin  E. “Gradient Ordered List.”<span className="italic-text">CodePen</span>, 15 May 2019, &nbsp;
                        <a href="http://codepen.io/erinesullivan/pen/qGrdGV" target="_blank" rel = "noopener noreferrer">codepen.io/erinesullivan/pen/qGrdGV</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Description:&nbsp;</span>
                    <span style={{color: "#777777"}}>The timeline in the ~/Projects directory.</span><br/>
                    <li>Houser, Alan. “CSS Timeline for Giggles.” <span className="italic-text">CodePen</span>, 24 Jan. 2018, &nbsp;
                        <a href="http://codepen.io/alanhouser/pen/aErrQJ" target="_blank" rel = "noopener noreferrer">codepen.io/alanhouser/pen/aErrQJ</a>.
                    </li><br/>

                    <span style={{color: "green"}}>Other:&nbsp;</span>
                    <span style={{color: "#777777"}}>React Boostrap, Ant Design, React-Photo-Gallery.</span><br/>

                </ul>
            </div>
        )
    }
}

export default Sources
