import React from 'react';

const FrontEnd = () => (
  <div className='row Front_End_row text-white m-0'>
    <div className="col-md-12">
      <h5 className='Front_End_h5'>FRONT END</h5>
    </div>

    <div className='col-md-7 col-xs-12 box-background'>
      <div className='row'>
        <div className='col-12 text-center '>
          <embed
            style={{ width: '250px' }}
            type='image/svg+xml'
            src='./svg/web_tech.svg'
          />
          <h5 className='font-weight-bold text-warning'>WEB TECHNOLOGIES</h5>
        </div>
        <div className='col-md-3 col-xs-6 Web_tech_sm_col'>
          <embed
            className='Front_End_Web_svg'
            style={{ color: 'black' }}
            type='image/svg+xml'
            src='./svg/html.svg'
          />
          <h5 className='text-warning Front_End_Web_h5'>HTML</h5>
          <ul className='Front_End_ul'>
            <li>Handlebars</li>
            <li>Mustache</li>
            <li>Jade</li>
          </ul>
        </div>
        <div className='col-md-3 col-xs-6 Web_tech_sm_col'>
          <embed
            className='Front_End_Web_svg'
            style={{ color: 'black' }}
            type='image/svg+xml'
            src='./svg/css.svg'
          />
          <h5 className='text-warning Front_End_Web_h5'>CSS</h5>
          <ul className='Front_End_ul'>
            <li>Foundation</li>
            <li>Bootstrap</li>
            <li>LESS</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className='col-md-3 col-xs-6 Web_tech_sm_col'>
          <embed
            className='Front_End_Web_svg'
            style={{ color: 'black' }}
            type='image/svg+xml'
            src='./svg/javascript.svg'
          />
          <h5 className='text-warning Front_End_Web_h5'>JavaScript</h5>
          <ul className='Front_End_ul'>
            <li>React</li>
            <li>jQuery</li>
            <li>Vue</li>
            <li>Ember</li>
          </ul>
        </div>
        <div className='col-md-3 col-xs-6 '>
          <embed
            className='Front_End_Web_svg'
            style={{ color: 'black' }}
            type='image/svg+xml'
            src='./svg/typescript.svg'
          />
          <h5 className='text-warning Front_End_Web_h5'>TypeScript</h5>
          <ul className='Front_End_ul'>
            <li>Angular</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='col-md-5 col-xs-12 pt-5 pt-2 box-background Mobile_Desktop_Col'>
      <div style={{ borderBottom: '0.5rem solid #2C3E50' }} className='row'>
        <div className='col-6 '>
          <embed
            style={{ width: '100%' }}
            type='image/svg+xml'
            src='./svg/mobile_dev.svg'
          />
        </div>
        <div className='col-6 '>
          <h5 className='text-warning Front_End_Web_h5 pt-3'>MOBILE</h5>
          <ul className='Front_End_ul_side'>
            <li>React-native</li>
            <li>Cordova</li>
            <li>Phonegap</li>
            <li>Ionic</li>
          </ul>
        </div>
      </div>
      <div className='row' style={{ borderTop: '0.5rem solid #2C3E50' }}>
        <div className='col-6 '>
          <embed
            style={{ width: '100%' }}
            type='image/svg+xml'
            src='./svg/desktop_dev.svg'
          />
        </div>
        <div className='col-6 '>
          <h5 className='text-warning Front_End_Web_h5 pt-3'>DESKTOP APP</h5>
          <ul className='Front_End_ul_side'>
            <li>Electron</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default FrontEnd;
