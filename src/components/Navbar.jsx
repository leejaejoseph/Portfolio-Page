import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from './utility/fileAssets';

function Navbar() { 
  return (
    <nav className='fixed z-10 pt-8'>
      <Link
        to ="https://github.com/leejaejoseph">
          <img
            src={logo}
            alt="logo"
            onPointerOver={(event) => {
              event.target.src = logo }}
            className='w-4/12'
            />
        </Link>
    </nav>
  )
}

export { Navbar }