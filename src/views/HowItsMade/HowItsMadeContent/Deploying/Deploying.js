import React from 'react';
import './Deploying.css'

function Deploying() {
    return (
      <div className="row" style={{paddingBottom: "100px"}}>
          <div className="two-col-format-column deploying-col-img">
              <div className="deploy-button">
                  <span>DEPLOY</span>
              </div>
          </div>
          <div className="two-col-format-column deploying-col-text">
              <p>
                  The website was then deployed. Heroku was chosen as the hosting service due to its ability to
                  automatically deploy a project by pushing to a GitHub repo. A domain was then purchased from
                  Domains.com to make the website more accessible. The domain was applied to the Heroku project
                  to produce the site you see now.
              </p>
              <p> 
                <span className='bold-text'>2022 Edit: </span>
                Heroku eliminated their free plan, so this page is now hosted by Github Pages. Github 
                does not naitvely support single page apps (SPA), so I found this
                &nbsp;<a href='https://github.com/rafgraph/spa-github-pages' target='_blank' rel="noopener noreferrer">brilliant hack</a>&nbsp;
                to support frontend routing. 
              </p>
          </div>
      </div>
    );
}

export default Deploying;
