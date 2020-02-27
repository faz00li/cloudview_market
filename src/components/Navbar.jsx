import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <div className="container-fluid">

      <style jsx>{`
        Link {
          padding-bottom: '41px';
          padding-top: '25px';   
        }
        img {
          height: 70px;
        }
      `}</style>

        <div className="navbar navbar-light bg-light border border-primary">
        <div className="row">
          <div className="col-sm">
            <Link to="/"><img  src={Logo}/></Link>
          </div>
          <div className="col-m">
            <ul className="list-inline  mt-4">	
              <li className="list-inline-item mx-5"> <Link to="/">Home</Link></li>
              <li className="list-inline-item mx-5"> <Link to="/Schedule">Weekly Schedule</Link></li>
              <li className="list-inline-item mx-5"> <Link to="/seasons">Seasonal Crops</Link></li>
              <li className="list-inline-item mx-5"> <Link to="/about">About Us</Link></li>
            </ul>		   
          </div>
        </div>
        </div >
      </div>
  );
};

export default Navbar;