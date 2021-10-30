import React from 'react';
import { useGetContactsQuery } from '../../services/contactsSlice/contactsSlice';
import AddContactForm from '../../components/AddContactForm/AddContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { Container, Typography } from '@mui/material';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const { data: contacts } = useGetContactsQuery(null);

  return (
    <section className={s.contactsSection}>
      <Container fixed className={s.contactsContainer}>
        <Typography
          variant="h3"
          gutterBottom
          component="h1"
          className={s.contactsTitle}
        >
          My Phonebook
        </Typography>
        {contacts && (
          <>
            <AddContactForm contacts={contacts} />
            <h2>Contacts</h2>
            <Filter />
            <ContactList contacts={contacts} />
          </>
        )}
      </Container>
    </section>
  );
};

export default ContactsPage;
