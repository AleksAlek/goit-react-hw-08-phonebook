import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshCurrentUser,
  signUp,
} from '../actions/authActions';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state, _action) {
      state.user = {
        name: '',
        email: '',
      };
      state.token = null;
      state.isLoggedIn = false;
    },

    [refreshCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.userData;
      state.token = payload.userToken;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
