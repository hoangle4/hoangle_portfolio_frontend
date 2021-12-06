import React from 'react'
// import Link from 'next/link'
const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='Landing_Card box-background'>
        <div className='card-img justify-content-center text-center Landing_Card_Img_Box'>
          <img
            height='200px'
            width='175px'
            src='/images/avatar.jpg'
            alt=''
          />
        </div>
        <div className='card-body text-white text-center'>
          <h5 className='card-title mb-2'>
            Hoang Le
            <span>
              <br />
              <small style={{ color :'rgba(243, 156, 18)' }}>
                Full Stack Developer
              </small>
            </span>
          </h5>
          <div className='social-media-links p-0'>
            <a href='https://github.com/hoangle4' target='_blank' rel="noreferrer">
              <img
                height='25px'
                width='25px'
                src='/svg/github.svg'
                type='image/svg+xml'
                className='mr-2'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/hoang-le-20b79a177/'
              target='_blank' rel="noreferrer"
            >
              <img
                height='25px'
                width='25px'
                src='/svg/linkedIn.svg'
                type='image/svg+xml'
                className='mr-2'
              />
            </a>
            {/* <li data-toggle='tooltip' data-placement='top' title='View Resume'>
              <Link href='/resume'>
                <img
                  height='25px'
                  width='25px'
                  src='/svg/resume.svg'
                  type='image/svg+xml'
                  className='mr-2'
                />
              </Link>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner