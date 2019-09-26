import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from './context';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Landing from './Components/Landing';
const App = () => {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/resume' component={SignUp} />
          {/* <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/myaccount" component={MyAccount} />
            <Route exact path="/userprofile/:id" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/test" component={Test} /> */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
