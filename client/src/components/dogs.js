import React from 'react';
import Dog from './dog.js';
import MeetThem from './meetThem.js'

function Dogs(props) {

  const dogs = props.dogs;

  const refinedDogs = dogs.slice(0,4);

  const dogList = refinedDogs.map((dog) => {
    {console.log('dog:', dog, 'id: ', dog._id )}
    return <Dog dog={dog} key={dog._id}/>
  })

  return (
    <div className='dogList'>
      {dogList}
      <MeetThem dogs={props.dogs} breedId={props.breedId} />
    </div>
  );

}

export default Dogs;