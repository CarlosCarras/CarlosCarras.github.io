import React from 'react';
import './CodingProcess.css';

const Coding    = require('./../../../../assets/process-coding.png'),
      Debugging = require('./../../../../assets/process-debugging.png'),
      SettingUp = require('./../../../../assets/process-setting_up.png'),
      Testing   = require('./../../../../assets/process-testing.png');

class CodingProcess extends React.Component {
    getImage() {
        return(
            <div className="two-col-format-column coding-process-col-img">
                <div className="coding-process-container">
                    <div className="image-box">
                        <img src={SettingUp} alt="setting up process"/>
                        <span>Setting Up</span>
                    </div>
                    <div className="image-box">
                        <img src={Coding} alt="coding process"/>
                        <span>Coding</span>
                    </div>
                    <div className="image-box">
                        <img src={Testing} alt="testing process"/>
                        <span>Testing</span>
                    </div>
                    <div className="image-box">
                        <img src={Debugging} alt="debugging process"/>
                        <span>Debugging</span>
                    </div>
                </div>
            </div>
        )
    }

    getText() {
        return(
          <div className="two-col-format-column coding-process-col-text">
              <p>
                  The coding phase was by far the most time consuming out of all of the phases. I started by writing a script that would start up Atom, the client, the server, and a file browser window.
                  I then used a React App template that I had obtained from the aforementioned Software Engineering course and built my website on top of it. React Bootstrap proved especially useful when
                  implementing buttons and the navbar. I also heavily relied on internet tutorials for guidance on how to implement key CSS components. Along the way, I ran some tests (contrary to the joke
                  on the right) using Mocha to make sure that the website was functional (more on these below). All tests were removed from the GitHub repo to reduce clutter. If something did not render appropriately, I used
                  the browser inspection tool to assess the problem before fixing it. And then... rinse and repeat.
              </p>
          </div>
        )
    }

    render() {
        if (window.screen.width < 800) {
            return (
                <div className="row" style={{paddingBottom: "100px"}}>
                    {this.getImage()}
                    {this.getText()}
                </div>
            )
        }
        else {
            return (
                <div className="row" style={{paddingBottom: "100px"}}>
                    {this.getText()}
                    {this.getImage()}
                </div>
            )
        }
    }
}

export default CodingProcess;
