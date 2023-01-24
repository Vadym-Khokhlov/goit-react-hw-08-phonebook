import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { AppHeading } from './App.styled';

export const App = () => {
  return (
    <>
      <AppHeading>PhoneBook</AppHeading>
      <ContactForm />
      <ContactList />
    </>
  );
};
