import React from 'react';
import style from 'styled-components';

var StyledDiv = style.div`
  text-align: center;
  color: #6504b5;
  background-color: white
`;

function NameCard(props) {
  
    return (
      <StyledDiv>
      <br></br>
      <div>
        {props.name}
      </div>
      <br></br>
      </StyledDiv>
    )

}

export default NameCard;