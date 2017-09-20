import React, { Component } from 'react';
import Images from './Images'


class ImagesHolder extends Component {
  render() {
    return (
      <div className="ImagesHolder">
        <h1>Hello from ImagesHolder from Search</h1>
        <Images />
      </div>
    );
  }
}

export default ImagesHolder;
