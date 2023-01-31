import { useDispatch } from 'react-redux';
import {
  ContactItem,
  RemoveButton,
  ContactInfo,
} from 'components/Contacts/ContactList.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItem>
      <ContactInfo>
        <p>{contact.name}</p>
        <p>Number: {contact.phone}</p>
      </ContactInfo>
      <RemoveButton onClick={handleDelete}>remove</RemoveButton>
    </ContactItem>
  );
};
