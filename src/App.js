import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

// Component imports
import Login from './views/Login';
import Callback from './views/Callback';
import Secret from './views/Secret';
import NotFound from './views/NotFound';
import PrivateRoute from './PrivateRoute';

// Auth
import Auth from "./Auth";


function App() {
  const auth = new Auth();
  return (
    <div className="App">
      <Route exact path="/" render={() => <Login auth={auth} />} />
      <Route path="/callback" render={() => < Callback auth={auth} />} />
      <PrivateRoute path="/secret" component={Secret} auth={auth}/>
      <Route path="/notfound" render={() => < NotFound auth={auth} />} />
    </div>
  );
}

export default App;
