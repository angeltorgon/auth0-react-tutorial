import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

// Component imports
import Login from './views/Login';
import Redirect from './views/Redirect';

// Auth
import Auth from "./Auth";


function App() {
  const auth = new Auth();
  return (
    <div className="App">
      <Route exact path="/" render={() => <Login auth={auth} />} />
      <Route path="/redirect" component={Redirect} />
    </div>
  );
}

export default App;
