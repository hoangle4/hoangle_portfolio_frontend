import React from 'react';

const Server = () => {
  return (
    <div className='row Server_row text-white m-0'>
      <div className='col-md-4 col-xs-12 text-center'>
        <embed
          className='web_svg'
          style={{ color: 'black', width: '150px' }}
          type='image/svg+xml'
          src='./svg/database.svg'
        />
        <h5 className='text-warning'>DATABASE</h5>
        <ul className='server_ul'>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div className='col-md-4 col-xs-12 text-center'>
        <embed
          className='web_svg'
          style={{ color: 'black', width: '150px' }}
          type='image/svg+xml'
          src='./svg/server.svg'
        />
        <h5 className='text-warning'>SERVER</h5>
        <ul className='server_ul'>
          <li>Apache</li>
          <li>Nginx</li>
          <li>AWS</li>
          <li>Heroku</li>
        </ul>
      </div>
      <div className='col-md-4 col-xs-12 text-center'>
        <embed
          className='web_svg'
          style={{ color: 'black', width: '150px' }}
          type='image/svg+xml'
          src='./svg/os.svg'
        />
        <h5 className='text-warning'>OPERATING SYSTEM</h5>
        <ul className='server_ul'>
          <li>Windows</li>
          <li>MacOS</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>
  );
};

export default Server;
