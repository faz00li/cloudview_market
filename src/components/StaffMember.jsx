import React from 'react';
import PropTypes from 'prop-types';
//import Picture from {pictureURL}

function StaffMember(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.pictureURL}</p>
      {/* <img src={Picture}/> */}
      
      <hr/>
    </div>
  );
}

StaffMember.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictureURL: PropTypes.string.isRequired 

};

export default StaffMember;