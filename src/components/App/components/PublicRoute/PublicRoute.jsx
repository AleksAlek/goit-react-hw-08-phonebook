import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  isLogged,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogged && restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
