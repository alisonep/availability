import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Dogs from './components/dogs.js'
import Dog from './components/dog.js'

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
        <Dogs dogs={this.state.dogs} breedId={this.state.breedId}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));