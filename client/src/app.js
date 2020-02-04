import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breedId: 1,
      dogs: []
    }
  }

  dogFinder() {
    axios.get('/getAllMatchingBreed', {
      params: {
        key: this.state.breedId
      }
    })
    .then((res) => {
      console.log('Response from dogFinder: ', res);
      this.setState({
        dogs: res.data
      })
    })
    .catch((err) => {
      if (err) { throw err; }
    })
  }
  
  componentDidMount() {
    this.dogFinder();
  }

  render() {
    return (
      <div>
        <h1>{this.state.breedId}s Availabile Nearby</h1>
        <h3>{Math.max(this.state.dogs.length - 4, 0)} more {this.state.breedId}s available for adoption</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));