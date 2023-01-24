import { Contacts } from './ContactList.styled';
import { SectionHeading } from 'components/App.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getInputFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getInputFilter);
  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.contactName.toLowerCase().includes(filter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {contacts.length > 0 && (
        <>
          <SectionHeading>Contacts</SectionHeading>
          <Filter />
          <Contacts>
            {visibleContacts.map(contact => (
              <ContactListItem key={contact.id} contact={contact} />
            ))}
          </Contacts>
        </>
      )}
    </>
  );
};

export default ContactList;
