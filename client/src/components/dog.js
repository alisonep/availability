import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>
        <p>{this.props.dog.name} will go here</p>
        {console.log('dogprops:', this.props)}
      </div>
    )
  }

}

export default Dog;