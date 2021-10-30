import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter } from '../../selectors';
import { useDeleteContactMutation } from '../../services/contactsSlice/contactsSlice';
import s from './ContactList.module.css';
import { Button } from '@mui/material';

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={s.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsItem}>
          <p className={s.contactsName}>
            {name}: {number}
          </p>

          <Button
            variant="outlined"
            color="error"
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
