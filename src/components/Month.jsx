import React from 'react';
import PropTypes from 'prop-types';

function Month(props)
{
  return (
    <div className="col-sm">
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((crop) =>
        <li>{crop}</li>
        )}
      </ul>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default Month;