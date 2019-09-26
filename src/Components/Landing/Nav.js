import React from 'react';

const Nav = () => (
  <nav
    style={{ background: 'rgba(149, 165, 166,.5)' }}
    className='navbar navbar-expand-lg navbar-dark nav-background '
  >
    <a className='navbar-brand' href='#!'>
      <img
        style={{ height: '100px' }}
        src='./images/logo_light.png'
        alt='hoang le freelance web developer portland, oregon'
      />
    </a>
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
          <a className='nav-link' href='#!'>
            Home <span className='sr-only'>(current)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            About Me
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            Resume
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            Projects
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
