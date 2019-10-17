import React from 'react';
import PropTypes from 'prop-types';

const Resume = () => {
  return (
    <div className='row'>
      <div className='col-12 text-center'>
        <embed
          style={{ width: '95%' }}
          type='image/svg+xml'
          src='./svg/reumse-2.svg'
        />
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
