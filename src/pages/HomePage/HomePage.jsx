import { Button, Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserName } from '../../selectors';
import s from './HomePage.module.css';

const HomePage = () => {
  const userName = useSelector(getUserName);

  return (
    <>
      <Container className={s.nomePageContainer}>
        <h1>HomePage</h1>
        {userName && <h2>Welcome, {userName}</h2>}
        {!userName && (
          <>
            <h2>Welcome, Guest</h2>
            <Button>
              <Link to="/auth" className={s.homePageLink}>
                Please, Authenticate
              </Link>
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
