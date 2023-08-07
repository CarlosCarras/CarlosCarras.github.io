import React from 'react';
import './GTAudition.css';


const SnareOnly      = require('./Supplemental/GTAudition_snare.png'),
      TenorsOnly     = require('./Supplemental/GTAudition_tenors.png'),
      SnareCentered  = require('./Supplemental/GTAudition_snarecentered.png'),
      TenorsCentered = require('./Supplemental/GTAudition_tenorscentered.png');

class GTAudition extends React.Component {

    render() {
        return(
          <div className="gt-audition-container">
                <h1>Georgia Tech Drumline Audition</h1>
                <p>Hi all! This is my audition material for the 2023-24 Georgia Tech drumline. 
                    I would like to audition for <span className='gt-audition-instrument'>tenors</span> and <span className='gt-audition-instrument'>snare</span>.
                    I love playing both instruments, so <span className='italic-text'>if</span> &nbsp;I get the part, I'm happy to go where you think I would be most
                    proficient. 
                
                    The material is organized into four YouTube playlists. Click on any of them to be directed to YouTube.
                </p>
                
                <div className='gt-audition-picturelinks-container'>
                    <div className='gt-audition-picturelink'>
                        <a href='https://www.youtube.com/playlist?list=PLRmRhh668Qrs6EDbGfz-EMoF6RwrbMbgE' target='_blank'>
                            <img src={SnareCentered} alt='Snare-Centered Audition Playlist'/>
                        </a>
                    </div>
                    <div className='gt-audition-picturelink'>
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target='_blank'>
                            <img src={TenorsCentered} alt='Tenors-Centered Audition Playlist'/>
                        </a>
                    </div>
                    <div className='gt-audition-picturelink'>
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target='_blank'>
                            <img src={SnareOnly} alt='Snare Only Audition Playlist'/>
                        </a>
                    </div>
                    <div className='gt-audition-picturelink'>
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target='_blank'>
                            <img src={TenorsOnly} alt='Tenors Only Audition Playlist'/>
                        </a>
                    </div>
                </div>

                <p>Please reach out to me at&nbsp;
                   <a href="mailto:ccarrasquillo3@gatech.edu">ccarrasquillo3@gatech.edu</a> or text/call (787) 668-8096 if you have any questions.
                   Thank you for your time!
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    - <span className='italic-text'>Carlos Carrasquillo</span>
                </p>
          </div>
        )
    }
}

export default GTAudition
