import React from 'react';

const CalculatorItem = ({name, purpose, width, height, standard, premium}) => {
  return (
				<div className="card mb-5 windows-card" style={{width: "100%"}}>
				  <div className="card-body">
					<h5 className="card-title">{name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{purpose}</h6>
					<form className='input-group mb-3'>
						 <div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">Size</span>
						 </div>
						<select value={width} className="form-control"  aria-describedby="basic-addon1">
							<option selected disabled>Choose width</option>
							<option>12</option>
							<option>24</option>
							<option>36</option>
							<option>48</option>
							<option>60</option>
						</select>
						<select value={height} className="form-control"  aria-describedby="basic-addon1">
							<option selected disabled>Choose height</option>
							  <option>12</option>
							  <option>24</option>
							  <option>36</option>
							  <option>48</option>
							  <option>60</option>
						</select>
					</form>
          <div className='input-group mb-2'  style={{width:'30%'}}>
            <div className="input-group-prepend">
              	<span style={{background:'white'}} className="input-group-text" id="basic1"><a  href="#" className="card-link">Standard</a></span>
            </div>
            <input value={`$${standard}.00`} style={{background:'white'}} className="form-control"  aria-describedby="basic1" disabled/>
          </div>
          <div className='input-group'  style={{width:'30%'}}>
            <div className="input-group-prepend">
                <span style={{background:'white'}} className="input-group-text" id="basic2"><a href="#" className="card-link">Premium</a></span>
            </div>
            <input value={`$${premium}.00`} style={{background:'white'}} className="form-control"  aria-describedby="basic2" disabled/>
          </div>
				  </div>
				</div>
  );
};

export default CalculatorItem;
