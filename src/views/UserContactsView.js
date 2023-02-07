import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export const UserContactsView = () => {
  const dispatch = useDispatch();
  //const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm />
      <Contacts />
    </>
  );
};
