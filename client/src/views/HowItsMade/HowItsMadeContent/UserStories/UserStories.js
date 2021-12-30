import React from 'react';
import './UserStories.css'

function UserStories() {
    return (
      <div className="row user-story-section">
          <div className="two-col-format-column user-story-col-img">
              <div className="scrolling-wrapper-flexbox">
                  <div className="story-card">
                      <p> As a user, I want to see a summary of who the site owner is so that I can .</p>
                      <div><span>1/8</span></div>
                  </div>
                  <div className="story-card">
                      <p> As a user, I want to be able to view this person's resume so that I can assess his/her qualifications.</p>
                      <div><span>2/8</span></div>
                  </div>
                  <div className="story-card">
                      <p> As a user, I want to be able to email the site owner via a contact form so that I can communicate with him/her in a convenient manner.</p>
                      <div className="user-story-page-num-transform1"><span>3/8</span></div>
                  </div>
                  <div className="story-card">
                      <p> As a site owner, I want to be able to receive emails from users that visit my website.</p>
                      <div><span>4/8</span></div>
                  </div>
                  <div className="story-card">
                      <p> As a user, I want to view the owner's design portfolio in the form of a gallery so that I can get further insight on the experience of the site owner.</p>
                      <div className="user-story-page-num-transform1"><span>5/8</span></div>
                  </div>
                  <div className="story-card">
                      <p> As a user, I want to view the owner's design portfolio in the form of a gallery so that I can get further insight on the experience of the site owner.</p>
                      <div className="user-story-page-num-transform1"><span>6/8</span></div>
                  </div>
                  <div className="story-card">
                      <p> As a user, I want be walked through the creative process for how the website was developed so that I can get started on my own site.</p>
                      <div className="user-story-page-num-transform1"><span>7/8</span></div>
                  </div>
                  <div className="story-card">
                      <p> As a user, I want to view the source code of the source code of the webpage to gain technical insight on how the website was developed.</p>
                      <div className="user-story-page-num-transform1"><span>8/8</span></div>
                  </div>
              </div>
          </div>
          <div className="two-col-format-column user-story-col-text">
              <p>
                  It began with the User Stories. A set of user stories describes the minimum functionallity that a webpage must have from the perspective of an intended
                  user. User Stories act as a high-level overview of the functionallity of the webpage. They follow a straight-forward template:
              </p>
              <p style={{fontFamily: "Indie Flower", textAlign: "center"}}>
                  {"As a < type of user >, I want < some goal > so that < some reason >"}
              </p>
              <p>
                  For more information on User Stories, click <a href="https://www.mountaingoatsoftware.com/agile/user-stories" target="_blank" rel="noopener noreferrer">here</a>.
              </p>
          </div>
      </div>
    );
}

export default UserStories;
