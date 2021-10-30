import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { getIsLogged } from '../../selectors';
import { HomePage, AuthPage, ContactsPage } from '../../pages';
import Header from '../Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { refreshCurrentUser } from '../../redux/actions/authActions';

const App = () => {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />

          <PublicRoute
            restricted={true}
            path="/auth"
            component={AuthPage}
            isLogged={isLogged}
          />

          <PrivateRoute
            path="/contacts"
            component={ContactsPage}
            isLogged={isLogged}
          />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
