import React from 'react';
import PropTypes from 'prop-types';

const Resume = props => {
  return (
    <div className='row'>
      <div className='col-12 text-center '>
        <embed
          style={{ width: '100%' }}
          type='image/svg+xml'
          src='./svg/reumse-1.svg'
        />
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
