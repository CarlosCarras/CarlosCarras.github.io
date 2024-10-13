import React from 'react';
import './GTAudition.css';


const SnareOnly      = require('./../../../../assets/extras/gtaudition/GTAudition_snare.png'),
      TenorsOnly     = require('./../../../../assets/extras/gtaudition/GTAudition_tenors.png'),
      SnareCentered  = require('./../../../../assets/extras/gtaudition/GTAudition_snarecentered.png'),
      TenorsCentered = require('./../../../../assets/extras/gtaudition/GTAudition_tenorscentered.png');

const EMAIL = "ccarrasquillo3@gatech.edu",
      PHONE = "(787) 668-8096";

function GTAudition() {
    return (
        <div className="gt-audition-container">
            <h1>Georgia Tech Drumline Audition</h1>
            <p><b>Update</b>: I got the part!</p>

            <div className='gt-audition-text'>
                <p>Hi all! This is my audition material for the 2023-24 Georgia Tech drumline. 
                    I would like to audition for <b>tenors</b> and <b>snare</b>.
                    I love playing both instruments, so <em>if</em>&nbsp;I get the part, I'm happy to go where you think I would be most
                    proficient. 
                
                    The material is organized into four YouTube playlists. Click on any of them to be directed to YouTube.
                </p>
            </div>
            
            <div className='gt-audition-picturelinks-container'>
                <a href='https://www.youtube.com/playlist?list=PLRmRhh668Qrs6EDbGfz-EMoF6RwrbMbgE' target='_blank' rel="noopener noreferrer">
                    <img src={SnareCentered} alt='Snare-Centered Audition Playlist'/>
                </a>
                <a href='https://www.youtube.com/playlist?list=PLRmRhh668QrurRnI_-gPzHXbKhk3FsoXT' target='_blank' rel="noopener noreferrer">
                    <img src={TenorsCentered} alt='Tenors-Centered Audition Playlist'/>
                </a>
                <a href='https://www.youtube.com/playlist?list=PLRmRhh668Qrv7IpHFjAJ7B7A4GbEbQVez' target='_blank'rel="noopener noreferrer">
                    <img src={SnareOnly} alt='Snare Only Audition Playlist'/>
                </a>
                <a href='https://www.youtube.com/playlist?list=PLRmRhh668QruVTentUk6CBrZjaT7YiPhj' target='_blank' rel="noopener noreferrer">
                    <img src={TenorsOnly} alt='Tenors Only Audition Playlist'/>
                </a>
            </div>

            <div className='gt-audition-text'>
                <p> Please <a href="/contact">contact</a> me if you have any questions.
                    Thank you for your time!
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    - <span className='italic-text'>Carlos Carrasquillo</span>
                </p>
            </div>
        </div>
    )
}

export default GTAudition
