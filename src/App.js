import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

// Component imports
import Login from './views/Login';
import Redirect from './views/Redirect';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/redirect" component={Redirect} />
    </div>
  );
}

export default App;
