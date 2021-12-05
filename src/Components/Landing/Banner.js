import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='Landing_Card box-background'>
        <div className='card-img justify-content-center text-center Landing_Card_Img_Box'>
          <Image layout="responsive"
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
              <small style={{ color: 'rgba(243, 156, 18)' }}>
                Full Stack Developer
              </small>
            </span>
          </h5>
          <ul className='Banner_Ul p-0'>
            <li ata-toggle='tooltip' data-placement='top' title='View Github'>
              <a href='https://github.com/hoangle4' target='_blank'>
                <Image
                  height='25px' 
                  width='25px'
                  src='/svg/github.svg'
                  type='image/svg+xml'
                  className='mr-2'
                />
              </a>
            </li>
            <li ata-toggle='tooltip' data-placement='top' title='View LinkedIn'>
              <a
                href='https://www.linkedin.com/in/hoang-le-20b79a177/'
                target='_blank'
              >
                <Image
                  height='25px' 
                  width='25px'
                  src='/svg/linkedIn.svg'
                  type='image/svg+xml'
                  className='mr-2'
                />
              </a>
            </li>
            <li data-toggle='tooltip' data-placement='top' title='View Resume'>
              <Link href='/resume'>
                <Image 
                  height='25px' 
                  width='25px'
                  src='/svg/resume.svg'
                  type='image/svg+xml'
                  className='mr-2'
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
