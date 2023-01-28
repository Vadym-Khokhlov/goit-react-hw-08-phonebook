import { Contacts } from './ContactList.styled';
import { SectionHeading } from 'components/App.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <SectionHeading>Contacts</SectionHeading>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <Contacts>
            {visibleContacts.map(contact => (
              <ContactListItem key={contact.id} contact={contact} />
            ))}
          </Contacts>
        </>
      ) : (
        <p>Your phonebook is emty. Add your first contact</p>
      )}
    </>
  );
};

export default ContactList;
