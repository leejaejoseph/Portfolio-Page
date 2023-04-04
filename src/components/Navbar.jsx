import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

function Navbar() {
  return (
    <nav className='fixed z-10 pt-8'>
      <Link
        to ="/"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img
            src={ logo }
            alt="logo"
            onMouseOver={(event) => {
              event.target.src = logo }}
            className='w-4/12'
            />
        </Link>
    </nav>
  )
}

export { Navbar }