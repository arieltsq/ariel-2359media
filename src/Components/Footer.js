import React, { Component } from 'react';
import GiphyLogo from './Assets/giphy-logo.png'
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <span style={{marginRight: '5px'}}>Gallereasy POC web app</span>
              <img src={GiphyLogo} style={{height: '23px'}} alt="giphylogo"/>
            </div>
            <div className="col-6 col-md-4">
              <span>2359 Media</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
