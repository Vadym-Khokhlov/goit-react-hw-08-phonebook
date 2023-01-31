import React from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import { AppHeading } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppHeading>PhoneBook</AppHeading>
      <ContactForm />
      {isLoading && !error && <p>Loading...</p>}
      <Contacts />
    </>
  );
};
