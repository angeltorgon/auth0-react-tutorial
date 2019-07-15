import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from './Auth';



const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = new Auth();
  return (
    <Route
      {...rest}
      render={() => {
        if (auth.isAuthenticated()) {
          console.log(auth.isAuthenticated())
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;