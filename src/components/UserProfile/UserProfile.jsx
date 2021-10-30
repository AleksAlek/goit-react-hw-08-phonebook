import { Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from '../../selectors';
import { logOut } from '../../redux/actions/authActions';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import s from './UserProfile.module.css';
import { useHistory } from 'react-router';

const UserProfile = () => {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={s.profileContainer}>
      <div className={s.flexContainer}>
        <AccountBoxIcon />
        <Typography>{userEmail}</Typography>
      </div>
      <Button
        onClick={() => {
          dispatch(logOut());
          history.push('/');
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserProfile;
