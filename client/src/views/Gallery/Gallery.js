import React from 'react';
import './Gallery.css';

const Longboard   = require('./../../assets/gallery-longboard.JPG'),
      PumpBracket = require('./../../assets/project-mounting_bracket1.JPG'),
      DMLTeam1D   = require('./../../assets/gallery-dml_1D.JPG'),
      Climbing    = require('./../../assets/gallery-climbing.jpg'),
      Garita      = require('./../../assets/gallery-garita.jpg'),
      DMLTeam8B   = require('./../../assets/gallery-dml_8B.JPG'),
      Drumline    = require('./../../assets/gallery-drumline.JPG'),
      DoorUnlock  = require('./../../assets/gallery-unlock.JPG'),
      PCBuild     = require('./../../assets/project-pc_build4.JPG'),
      Drums       = require('./../../assets/gallery-drums.jpg'),
      HAMRadio    = require('./../../assets/gallery-ham.jpg'),
      Friends     = require('./../../assets/gallery-friends.jpg'),
      Family      = require('./../../assets/gallery-family.jpg'),
      Nvidia      = require('./../../assets/gallery-nvidia.PNG'),
      Bookshelf   = require('./../../assets/gallery-bookshelf.PNG'),
      Football    = require('./../../assets/gallery-football.PNG'),
      Welding     = require('./../../assets/gallery-welding.JPG'),
      Marilyn     = require('./../../assets/gallery-marilyn.JPG'),
      TADinner    = require('./../../assets/gallery-TA_dinner.jpg'),
      Zipline     = require('./../../assets/gallery-zipline.jpg'),
      Basketball  = require('./../../assets/gallery-basketball.png'),
      Flying      = require('./../../assets/gallery-flying.jpg'),
      Ohmmeter    = require('./../../assets/gallery-ohmmeter.jpg'),
      SwampHacks  = require('./../../assets/gallery-swamphacks.jpg');



/* Format: ['image.jpg', 'title', 'description', 'href'], */
const images = [ [Longboard,   'Longboard', 'My longboard being taken apart for maintenance.', ''],
                 [PumpBracket, 'Pump Bracket', 'A pump bracket that I manufactured for my custom-built computer.', '/Projects/MountingBracket'],
                 [DMLTeam1D,   'DML Team 1D', 'Our team\'s final design for the competition for Design & Manufacturing Lab.', ''],
                 [Climbing,    'Rock Climbing', 'Bouldering inside Vertical Ventures in St. Pete', ''],
                 [Garita,      'Garita', 'Taken at El Morro in San Juan, PR.', ''],
                 [DMLTeam8B,   'DML Team 8B', 'Team 8B\'s final design for the competition for Design & Manufacturing Lab.', ''],
                 [Drumline,    'On the Marching Field', 'Playing tenors with my high school\'s marching band.', ''],
                 [DoorUnlock,  'IOT Door Unlocker', 'A mechanism built for a class project, meant to unlock the dorm door remotely using IFTTT.', ''],
                 [PCBuild,     'Custom PC', 'A custom, liquid-cooled PC build to aid me through the remainder of my coursework.', '/Projects/PCBuild'],
                 [Drums,       'Acoustic Drumkit', 'My Gretsch drumkit with Evans heads and Sabian cymbals.', ''],
                 [HAMRadio,    'HAM Radio Practice', 'Communicating with Amateur Radio satellites over VHF and UHF.', ''],
                 [Friends,     'Beach', 'Hanging out with some friends at Luquillo Beach, PR.', ''],
                 [Family,      'Christmas', 'My family celebrating Christmas, 2019', ''],
                 [Nvidia,      'Nvidia Computer Vision Event', 'Applying machine learning principles at an Nvidia training event.', ''],
                 [Bookshelf,   'Building a Wooden Book', '... that also happens to be a bookshelf.', ''],
                 [Football,    'Gators Football Game', 'Attending a UF Football game with some friends.', ''],
                 [Welding,     'Plasma Cutting Practice', 'MIG welding, TIG welding, plasma cutting, and spot welding practice.', ''],
                 [Marilyn,     'Evening at Payne\'s Praire', 'with Marilyn.', ''],
                 [TADinner,    'Numerical Methods TA Dinner', 'Thank you Dr. Brooks!', ''],
                 [Flying,      'Flying', 'Departing from San Juan, PR to Tampa, FL.', ''],
                 [Zipline,     'Ziplining', 'Ziplining in Toro Verde, PR.', ''],
                 [Basketball,  'We\'re Talking \'bout Practice', 'Preparing for an intermural basketball game at UF Student Rec.', ''],
                 [Ohmmeter,    'Ohmmeter', 'A custom ohmmeter circuit built for EEL3923C.', ''],
                 [SwampHacks,  'Recipients of Infinite Energy\'s Best Hack', 'at SwampHacks 2020. Featuring Jaxon [left], Jonathan [right], and Sean [not pictured].', ''],
               ];

class Gallery extends React.Component {
    getImage(n) {
        return <img src={images[n][0]} alt={images[n][0]}/>
    }
    getInfo(n) {
        return(
            <div className="img-info">
                <div className="content">
                    <h2>{images[n][1]}</h2>
                    <p>{images[n][2]}</p>
                    {images[n][3] ?
                        <p className="yellow-text">Click for more Information.</p> : <p/>}
                </div>
            </div>
        )
    }
    getItem(n) {
        return(
            <div className="box">
                <div className="img-box">{this.getImage(n)}</div>
                {this.getInfo(n)}
            </div>
        )
    }
    getElement(n) {
        return images[n][3] ?
            <a href={images[n][3]}>{this.getItem(n)}</a> : this.getItem(n)
    }

    render() {
        return(
          <div className="gallery-page-container parallax">
              <h1>Gallery</h1>
              <div className="gallery-container">
                  {this.getElement(0)}
                  {this.getElement(1)}
                  {this.getElement(2)}
                  {this.getElement(3)}
                  {this.getElement(4)}
                  {this.getElement(5)}
                  {this.getElement(6)}
                  {this.getElement(7)}
                  {this.getElement(8)}
                  {this.getElement(9)}
                  {this.getElement(10)}
                  {this.getElement(11)}
                  {this.getElement(12)}
                  {this.getElement(13)}
                  {this.getElement(14)}
                  {this.getElement(15)}
                  {this.getElement(16)}
                  {this.getElement(17)}
                  {this.getElement(18)}
                  {this.getElement(19)}
                  {this.getElement(20)}
                  {this.getElement(21)}
                  {this.getElement(22)}
                  {this.getElement(23)}
              </div>
          </div>
        )
    }
}

export default Gallery
