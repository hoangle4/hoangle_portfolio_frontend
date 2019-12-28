import React, {Fragment, useState} from 'react';
import CalculatorItem from './CalculatorItem';
import './comps.css';
const Calculator = () => {

  const [calItem, setCalItem] = useState([
    {
      name:'Kitchen',
      purpose:'Sound Proof',
      width:'12',
      height:'12',
      standard:'216',
      premium:'333'
    },
    {
      name:'Bedroom',
      purpose:'UV Protection',
      width:'24',
      height:'12',
      standard:'314',
      premium:'456'
    },
    {
      name:'Guest Room',
      purpose:'Noise Deduction',
      width:'24',
      height:'24',
      standard:'245',
      premium:'321'
    }
  ]);

  return (
   <Fragment>

		<div className='row justify-content-center bg-light p-2 m-0'>
			<div className='col-md-8 text-dark'>
      {calItem.map((item,index) =>   <CalculatorItem key={index} {...item} /> )}

        <div className='row justify-content-center bg-light bottom-buttons p-0 m-0' >

          <div className='col-md-12 text-dark p-0 m-0'>
            <div className="card text-center">
              <div className='row p-0 m-0'>

                <div className='col-md-6 text-dark'>
                  <div className="card-body">
                    <a href="#" style={{background:'#20c997', color:'white', fontSize:'1.6rem'}} className="btn mb-3"><i className="far fa-plus-square"></i></a>
                    <h5 className="card-title">Add More Item</h5>
                  </div>
                </div>

                <div className='col-md-6 text-dark'>
                  <div className="card-body">
                    <a href="#" style={{background:'#3498DB', color:'white', fontSize:'1.6rem'}} className="btn mb-3"><i className="far fa-plus-square"></i></a>
                    <h5 className="card-title">Save Estimate</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
			</div>
      <div className='col-2'>
      <ul className="list-group sticky-sidebar">
        <li className="list-group-item"><strong>Windows</strong>: x{calItem.length}</li>
        <li className="list-group-item"><strong>Standard Total</strong> <br/> $775.00</li>
        <li className="list-group-item"><strong>Premium Total</strong> <br/> $1110.00</li>
      </ul>
      </div>
		</div>
   </Fragment>
  );
};

export default Calculator;
