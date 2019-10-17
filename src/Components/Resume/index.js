import React from 'react';
import PropTypes from 'prop-types';
import './Resume.css';
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
      <div className='col-12 text-center'>
        <div
          class='btn-group'
          role='group'
          aria-label='Button group with nested dropdown'
        >
          <div class='btn-group' role='group'>
            <button
              id='btnGroupDrop1'
              type='button'
              class='Resume_Button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <img
                className='Resume_Button_Img'
                style={{ width: '45px' }}
                src='./svg/download_button.svg'
                alt='download button'
              />
            </button>
            <div class='dropdown-menu' aria-labelledby='btnGroupDrop1'>
              <a
                class='dropdown-item'
                href='./files/Hoang_le_updated_oct-2019.pdf'
                download
              >
                Downlaod as .PDF
              </a>
              <a
                class='dropdown-item'
                href='./files/Hoang_le_updated_oct-2019.docx'
                download
              >
                Download as .DOCX
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
