import React from "react";
import PropTypes from "prop-types";

function WeeklySchedule(props){
  return (
    <div>
      <h1>WeeklySchedule</h1>
      {/* <h3>{props.day}</h3>
      <p><em>{props.location}</em></p> */}
      <hr/>
    </div>
  );
}

// MarketDay.propTypes = {
//   day: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired
// };

export default WeeklySchedule;