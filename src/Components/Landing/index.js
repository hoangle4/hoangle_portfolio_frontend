import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Server from './Server';

import './Landing.css';
const Landing = () => {
  return (
    <div className='Landing_Body bg-primary'>
      <div className='container border-dashed px-0'>
        <Nav />
        <Banner />
        <FrontEnd />
        <BackEnd />
        <Server />
      </div>
    </div>
  );
};

export default Landing;
