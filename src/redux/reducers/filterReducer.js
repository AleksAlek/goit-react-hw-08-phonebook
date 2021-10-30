import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from '../actions/filterActions';

const filterReducer = createReducer('', {
  [filterContacts.type]: (state, { payload }) => payload,
});

export default filterReducer;
