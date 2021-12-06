import React from 'react'
import './Resume.css'
const Resume = () => {
  return (
    <div className='row'>
      <div className='col-12 text-center'>
        <embed
          style={{ width :'95%' }}
          type='image/svg+xml'
          src='./svg/reumse-1.svg'
        />
      </div>
      <div className='col-12 text-center mt-5'>
        <div
          className='btn-group'
          role='group'
          aria-label='Button group with nested dropdown'
        >
          <div className='btn-group' role='group'>
            <button
              id='btnGroupDrop1'
              type='button'
              className='Resume_Button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <img
                className='Resume_Button_Img'
                style={{ width :'45px' }}
                src='./svg/download_button.svg'
                alt='download button'
              />
            </button>
            <div className='dropdown-menu' aria-labelledby='btnGroupDrop1'>
              <a
                className='dropdown-item'
                href='./files/Hoang_le_updated_oct-2019.pdf'
                download
              >
                Download as .PDF
              </a>
              <a
                className='dropdown-item'
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
  )
}

Resume.propTypes = {}

export default Resume