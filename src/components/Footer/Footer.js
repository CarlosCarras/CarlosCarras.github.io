import React from 'react';
import './Footer.css'

class Footer extends React.Component {

    render() {
        return(
          <div className="footer">
              <p>
                  So normally, this is the place where people add a subscription form or a second navbar or something. I would just like to shoutout Stack Overflow and the many
                  tutorials out there that helped me make this possible! More about that in the <a href="/../HowItsMade#sources">How It's Made</a> section.
              </p>
          </div>
        )
    }
}

export default Footer
