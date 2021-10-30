import React, { useState } from 'react';
import {
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Container,
} from '@mui/material';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';
import s from './AuthPage.module.css';

const AuthPage = () => {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <>
      <section className={s.authSection}>
        <Container fixed className={s.authContainer}>
          <FormGroup className={s.switchContainer}>
            <Typography
              variant="body1"
              gutterBottom
              component="p"
              color="primary"
            >
              You want ...
            </Typography>
            <FormControlLabel
              control={
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="p"
                    className={!authStatus ? s.switchOption : ''}
                  >
                    SignUp
                  </Typography>
                  <Switch
                    color="primary"
                    checked={authStatus}
                    onChange={() => setAuthStatus(!authStatus)}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="p"
                    className={authStatus ? s.switchOption : ''}
                  >
                    LogIn
                  </Typography>
                </>
              }
              label=""
              className={s.switchContainer}
            />
          </FormGroup>

          <Container fixed maxWidth="xs">
            {authStatus ? <LogInForm /> : <SignUpForm />}
          </Container>
        </Container>
      </section>
    </>
  );
};

export default AuthPage;
