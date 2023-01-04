import React from 'react';
import './DevelopmentSuite.css';

const JavaScriptLogo = require('./../../../../assets/logo-javascript.png'),
      ReactLogo      = require('./../../../../assets/logo-react.png'),
      HtmlLogo       = require('./../../../../assets/logo-html.png'),
      CSSLogo        = require('./../../../../assets/logo-css.png'),
      NodeJsLogo     = require('./../../../../assets/logo-nodejs.png');

class DevelopmentSuite extends React.Component {
    getImage() {
        return (
            <div className="two-col-format-column development-suite-col-img">
                <div className="development-suite-album">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="large polaroid img1" target="_blank" rel="noopener noreferrer">
                        <img src={JavaScriptLogo} alt="javascript logo"/> Javascript
                    </a>
                    <a href="https://reactjs.org/docs/getting-started.html" className="medium polaroid img2" target="_blank" rel="noopener noreferrer">
                        <img src={ReactLogo} alt="react logo"/> React
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" className="medium polaroid img3" target="_blank" rel="noopener noreferrer">
                        <img src={HtmlLogo} alt="html logo"/> HTML
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="small polaroid img4" target="_blank" rel="noopener noreferrer">
                        <img src={CSSLogo} alt="css logo"/> CSS
                    </a>
                    <a href="https://nodejs.org/en/docs/" className="small polaroid img5" target="_blank" rel="noopener noreferrer">
                        <img src={NodeJsLogo} alt="nodejs logo"/> node.js
                    </a>
                </div>
            </div>
        )
    }

    getText(){
        return (
            <div className="two-col-format-column development-suite-col-text">
                <p>
                    Next, it was time to select the software suite to make the website come to life. I had used a little bit of React in a previous college course
                    (Introduction to Software Engineering), so using the React library was a no-brainer. HTML, CSS, and Javascript (using Node.js) were a given for the front-end.
                    In the back-end, I decided to use Express, known for being the go-to server framework for Node.js. I also decided to use Axios as a means to communicate between the
                    front-end and the back-end. Finally, I settled on using Mailgun's API to facilitate the process of sending emails.
                </p>
                <p>
                    To write the code, I opted to use the familiar Atom text editor and the MacOS terminal.
                </p>
                <p>
                    Now that the software suite was picked out, I was ready to begin the coding journey.
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className="row" style={{paddingBottom: "10vh"}}>
                {this.getImage()}{this.getText()}
            </div>
        )
    }
}

export default DevelopmentSuite;
