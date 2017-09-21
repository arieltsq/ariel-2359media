import React, { Component } from 'react'
import ImagesHolder from './ImagesHolder'
import TextField from 'material-ui/TextField';

class SearchImages extends Component {
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="container-fluid">
            <TextField style={{ fontSize: '20px' }} hintText="Start searching for images!" fullWidth={true}  />
          </div>
          <ImagesHolder/>
        </div>
      </div>
    );
  }
}

export default SearchImages;
