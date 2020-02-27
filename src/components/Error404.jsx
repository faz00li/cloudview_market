import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorPage  from '../assets/images/error404.jpg';

function Error404(props) {
  console.log(props);

  
  return (
    
    <div className="page_background" >
      <style jsx>{`
      .page_background {
          background: url(${ErrorPage}) no-repeat center center fixed;
          min-height: 100vh;
          background-size: cover;
          overflow: hidden;
      }
    `}</style>
  
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">Home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;