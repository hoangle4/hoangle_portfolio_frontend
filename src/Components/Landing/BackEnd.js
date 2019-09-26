import React from 'react';

const BackEnd = () => (
  <div className='row Front_End_row text-white m-0 '>
    <div className='col-12 box-background'>
      <h5 className='Front_End_h5'>BACK END</h5>
      <div className='row '>
        <div className='col-md-6 col-xs-12 text-center Back_End_Node'>
          <embed
            style={{ width: '200px' }}
            className='Backend_embed'
            type='image/svg+xml'
            src='./svg/node.svg'
          />
          <ul className='Back_End_ul'>
            <li>Express</li>
            <li>Pasport</li>
            <li>Bcryptjs</li>
            <li>jsonwebtoken</li>
            <li>mongoose</li>
            <li>Socket.io</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className='col-md-6 col-xs-12 text-center'>
          <embed
            style={{ width: '200px' }}
            className='Backend_embed'
            type='image/svg+xml'
            src='./svg/php.svg'
          />
          <ul className='Back_End_ul'>
            <li>Laravel</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default BackEnd;
