import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ' '
    }
  }

  render() {
    return (
      <div className="App">
       <div className="App-title">Music Maestro</div>
       <FormGroup>
       <InputGroup>
       <FormControl
        type="text"
        placeholder="search for an artist.."
        query={this.state.query}
        onChange={event => {this.setState({query: event.target.value})}}
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
