import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { AppHeading } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppHeading>PhoneBook</AppHeading>
      <ContactForm />
      {selectIsLoading && !selectError && <b>Loading contacts...</b>}
      <ContactList />
    </>
  );
};
