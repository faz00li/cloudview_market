import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header(){
  
  return (
    <div className="header">
      <h1>Header</h1>
      <Navbar />
    </div>

  );
}

export default Header;
