import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Dogs from './components/dogs.js';
import style from 'styled-components'

const StyledDiv = style.div`
  width: 90%;
  margin: auto;
  color: #6504b5;
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breedId: 1,
      dogs: [],
      location: {
        on: false,
        latitude: 0,
        longitude: 0
      }
    }

    this.coordinates = this.coordinates.bind(this);
  }

  dogFinder() {
    axios.get('http://localhost:3003/getAllMatchingBreed', {
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

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.coordinates, this.locationError);
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
  }

  locationError(err) {
    if (err.PERMISSION_DENIED) {
      console.log("User denied location request.");
    } else if (err.POSITION_UNAVAILABLE) {
      console.log("Location unavailable.");
    } else if (err.TIMEOUT) {
      console.log("Location request timed out.");
    } else if (err.UNKNOWN_ERROR) {
      console.log("Location request resulted in an unknown error.");
    } else {
      console.log('Error: ', err);
    }
  }

  coordinates(position) {
    console.log(position.coords.latitude, '/', position.coords.longitude)
    console.log('Old state:', this.state)
    this.setState({
      location: {
        on: true,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    
    })
    console.log('New state:', this.state)
  }
  
  componentDidMount() {
    this.dogFinder();
    this.getLocation();
  }

  render() {
    return (
      <div>
        <StyledDiv>
          <h1>{this.state.breedId}s Availabile Nearby</h1>
        </StyledDiv>
        <Dogs dogs={this.state.dogs} breedId={this.state.breedId} location={this.state.location}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('availability'));