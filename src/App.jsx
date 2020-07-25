import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup,Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="App-title">Music Maestro from App</div>
       <FormGroup>
       <InputGroup>
       <FormControl
        type="text"
        placeholder="search for an artist.."
       />
        </InputGroup>
       </FormGroup>
       <div className="Profile">
       <div>Artist Picture</div>
       <div>Artist Name</div>
       </div>
       <div className="Gallery">
         Gallery
       </div>
      </div>
    )
  }
}

export default App;
