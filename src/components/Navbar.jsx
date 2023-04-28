import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 
  return (
    <nav className='fixed z-10 pt-8'>
      <Link
        to ="https://github.com/leejaejoseph">
          <img
            src='../src/assets/logo.gif'
            alt="logo"
            onPointerOver={(event) => {
              event.target.src = '../src/assets/logo.gif' }}
            className='w-4/12'
            />
        </Link>
    </nav>
  )
}

export { Navbar }