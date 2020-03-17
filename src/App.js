import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from './context';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Landing from './Components/Landing';
import Nav from './Components/Landing/Nav';
import Resume from './Components/Resume';
import Calculator from './Components/Calculator';
const App = () => {
  return (
    <Provider>
      <Router>
        <div className='Landing_Body bg-primary'>
          <div className='container border-dashed px-0'>
            <Nav />
            <Switch>
              <Route exact path='/' component={Landing} />
              {/*<Route exact path='/resume' component={Resume} />
		<Route exact path='/calculator' component={Calculator} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/myaccount" component={MyAccount} />
            <Route exact path="/userprofile/:id" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/test" component={Test} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
