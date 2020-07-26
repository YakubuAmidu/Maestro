import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  render() {
    console.log('gallery props', this.props);
    return (
      <div>Gallery</div>
    )
  }
}

export default Gallery;
