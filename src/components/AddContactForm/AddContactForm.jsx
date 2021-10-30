import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useAddContactMutation } from '../../services/contactsSlice/contactsSlice';
import s from './AddContactForm.module.css';
import { Button, TextField } from '@mui/material';

const initialState = {
  name: '',
  number: '',
};

const AddContactForm = ({ contacts }) => {
  const [contact, setContact] = useState(initialState);
  const [addContact] = useAddContactMutation();

  const handleContactData = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = e => {
    e.preventDefault();

    for (const { name } of contacts) {
      if (name === contact.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }

    const newContact = {
      id: shortid.generate(),
      name: contact.name,
      number: contact.number,
    };

    addContact(newContact);
    setContact({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.addForm}>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        margin="dense"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={contact.name}
        onChange={handleContactData}
        required
      />

      <TextField
        name="number"
        label="Number"
        type="tel"
        variant="outlined"
        margin="dense"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={contact.number}
        onChange={handleContactData}
        required
      />

      <Button
        variant="contained"
        size="large"
        type="submit"
        className={s.formBtn}
      >
        Add contact
      </Button>
    </form>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default AddContactForm;
