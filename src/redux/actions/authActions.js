import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('auth/signUp', async userData => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);

    Notiflix.Notify.success(`Welcome, ${data.user.name}`);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please, try again');
  }
});

export const logIn = createAsyncThunk('auth/logIn', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);

    Notiflix.Notify.success(`Welcome, ${data.user.name}`);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please, try again');
  }
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logout');
    Notiflix.Notify.info('See you later!');
    token.unset();
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please, try again');
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState, rejectWithValue }) => {
    const userToken = getState().authStore.token;
    if (userToken === null) {
      return rejectWithValue();
    }
    token.set(userToken);

    try {
      const { data: userData } = await axios.get('/users/current');

      return { userToken, userData };
    } catch (error) {
      Notiflix.Notify.failure('Login, please');
    }
  },
);
