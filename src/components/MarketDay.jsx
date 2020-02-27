import React from "react";
import PropTypes from "prop-types";

function MarketDay(props){
  return (
    <div>
      <h1>MarketDay</h1>
      <h3>{props.day}</h3>
      <p><em>{props.location}</em></p>
      <hr/>
    </div>
  );
}

MarketDay.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default MarketDay;