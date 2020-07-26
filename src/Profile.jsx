import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    let artist = { name: ' ', followers: {total: ' '}};
    artist = this.props.artist !== null ? this.props.artist : artist;

    return (
     <div className="profile">
      <div>{artist.name}</div>
      <div>{artist.followers.total}</div>
     </div>
    )
  }
}

export default Profile;
