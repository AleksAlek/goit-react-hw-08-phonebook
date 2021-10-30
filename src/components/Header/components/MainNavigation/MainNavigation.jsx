import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Button } from '@mui/material';
import s from './MainNavigation.module.css';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../../../selectors';

const MainNavigation = () => {
  const isLogged = useSelector(getIsLogged);
  const location = useLocation();

  return (
    <nav>
      <ul className={s.navigationList}>
        <li className={s.navigationList_item}>
          <NavLink exact to="/" className={s.navigationLink}>
            <Button
              variant="contained"
              color={location.pathname === '/' ? 'success' : 'primary'}
            >
              Home
            </Button>
          </NavLink>
        </li>

        {!isLogged && (
          <li className={s.navigationList_item}>
            <NavLink to="/auth" className={s.navigationLink}>
              <Button
                variant="contained"
                color={location.pathname === '/auth' ? 'success' : 'primary'}
              >
                Authentication
              </Button>
            </NavLink>
          </li>
        )}

        {isLogged && (
          <li className={s.navigationList_item}>
            <NavLink to="/contacts" className={s.navigationLink}>
              <Button
                variant="contained"
                color={
                  location.pathname === '/contacts' ? 'success' : 'primary'
                }
              >
                Contacts
              </Button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNavigation;
