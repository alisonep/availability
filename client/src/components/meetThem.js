import React from 'react';

function MeetThem(props) {

  return(
    <h2>
      {Math.max(props.dogs.length - 4, 0)} more {props.breedId}s available for adoption
      <hr></hr>
      Meet Them
    </h2>
  )
}

export default MeetThem;