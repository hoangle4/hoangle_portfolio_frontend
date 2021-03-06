import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => (
  <nav
    style={{ background: 'rgba(149, 165, 166,.5)' }}
    className='navbar navbar-expand-lg navbar-dark nav-background '
  >
    <Link className='navbar-brand' to='#!'>
      <img
        style={{ height: '100px' }}
        src='https://firebasestorage.googleapis.com/v0/b/my-gift-hub-1556864349041.appspot.com/o/logo_light.png?alt=media&token=59d1e9c9-4310-4750-b9e8-0674807839f2'
        alt='hoang le freelance web developer portland, oregon'
      />
    </Link>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarColor01'
      aria-controls='navbarColor01'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>

    <div
      className='collapse navbar-collapse justify-content-end'
      id='navbarColor01'
    >
      <ul className='navbar-nav '>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            Home <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='about-me'>
            About Me
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/resume'>
            Resume
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='project'>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
