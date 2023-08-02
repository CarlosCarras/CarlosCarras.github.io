import React from 'react';
import ResumeContent from './ResumeContent';
import Draggable from './../../components/Draggable/Draggable';
import ResumeFile from './../../assets/pdf-resume.pdf';
import ResumeImage from './../../assets/png-resume.png';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './Resume.css';

class Resume extends React.Component {

    getResume() {
        if (window.screen.width < 800) {
            return (
                <img src={ResumeImage} alt="carlos\'s resume" className="resumeImage"/>
            )
        }
        return (
            <div className="paper">
                <ResumeContent/>
            </div>
        )
    }

    render() {
        return(
          <div className="resume-page-container parallax">
              <h1>Resume</h1>

              <div className="button-group">
                  <a href={ResumeFile} target="_blank" rel="noopener noreferrer">
                      <Button type="submit" shape="round" size="large" ghost="true">
                          Download
                      </Button>
                  </a>
              </div>

              {this.getResume()}

              <Draggable x={20} y={450}>
                  {/*Note: The 'sticky' class CSS is located in '~/assets/Theme.css'*/}
                  <div className="sticky">
                      <div className="sticky-text"  /*contentEditable="true" spellCheck="false"*/>
                          Last Update: <br/>
                          August 2, 2023 <br/><br/>
                          Upcoming:
                          N/A <br/><br/>
                          [Move Me]
                      </div>
                  </div>
              </Draggable>
          </div>
        )
    }
}

export default Resume
