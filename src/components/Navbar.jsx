import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

function Navbar() {
  return (
    <nav className='fixed'>
      <Link
        to ="/"
        className='w-auto h-auto'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img
            src={ logo }
            alt="logo"
            onMouseOver={(event) => {
              event.target.src = logo }}
            className='w-30'
            />
        </Link>
    </nav>
  )
}

export { Navbar }