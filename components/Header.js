import React from 'react';
import NavBar from '../components/NavBar'
const Header = () => {
  return (
    <div>
      <div className='bg-gray-200'>
        <h1>
          <img className="h-24 py-4 mx-auto" src="/logo.png" height="60"></img>
        </h1>
      </div>
      <NavBar />
    </div>
  )
};

export default Header;