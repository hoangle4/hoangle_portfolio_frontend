import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className=''>
      <div className='Landing_Card box-background'>
        <div className='card-img justify-content-center text-center Landing_Card_Img_Box'>
          <img
            style={{ height: '200px', width: '175px' }}
            src='./images/avatar.jpg'
            alt=''
          />
        </div>
        <div className='card-body text-white text-center'>
          <h5 className='card-title mb-2'>
            Hoang Le
            <span>
              <br />
              <small>Full Stack Developer</small>
            </span>
          </h5>

          <Link to='/resume' className='btn btn-warning'>
            <i className='far fa-id-card'></i> Resume
          </Link>
          <Link to='/resume' className='btn btn-warning'>
            <i className='far fa-id-card'></i> Resume
          </Link>
          <Link to='/resume' className='btn btn-warning'>
            <i className='far fa-id-card'></i> Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
