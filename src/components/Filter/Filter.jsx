import { AccountCircle } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions/filterActions';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterContacts(event.target.value));
    setFilter(event.target.value);
  };

  return (
    <>
      <TextField
        name="number"
        label="Find contacts by name"
        type="tel"
        variant="outlined"
        margin="dense"
        value={filter}
        onChange={handleFilter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Filter;
