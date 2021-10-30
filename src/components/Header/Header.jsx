import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../selectors';
import { Container } from '@mui/material';
import UserProfile from '../UserProfile/UserProfile';
import MainNavigation from './components/MainNavigation/MainNavigation';
import s from './Header.module.css';

const Header = () => {
  const isLogged = useSelector(getIsLogged);

  return (
    <header>
      <Container fixed className={s.header_container}>
        <MainNavigation />

        {isLogged && <UserProfile />}
      </Container>
    </header>
  );
};

export default Header;
