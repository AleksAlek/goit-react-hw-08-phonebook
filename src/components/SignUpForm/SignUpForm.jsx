import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signUp } from '../../redux/actions/authActions';
import { Typography, TextField, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [userData, setUserData] = useState(initialState);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp(userData));
    setUserData(initialState);
    history.push('/');
  };

  return (
    <>
      <Typography variant="h3" gutterBottom component="h1">
        SignUp Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} direction="column">
          <TextField
            name="name"
            label="Name"
            variant="standard"
            margin="dense"
            value={userData.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="standard"
            margin="dense"
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="standard"
            margin="dense"
            value={userData.password}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
            size="large"
            endIcon={<SendIcon />}
          >
            SignUp
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default SignUpForm;
