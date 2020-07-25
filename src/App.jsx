import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ' '
    }
  }

  search() {
    console.log('this.state', this.state);
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
        value={this.state.query}
        onChange={event => {this.setState({query: event.target.value})}}
        onKeyPress={event => {
          if (this.key === "Enter") {
            this.search();
          }
        }}
       />
       <Button onClick={() => this.search()}>search</Button>
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
