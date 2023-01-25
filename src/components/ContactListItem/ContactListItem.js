import { useDispatch } from 'react-redux';
import {
  ContactItem,
  RemoveButton,
  ContactInfo,
} from 'components/ContactList/ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItem>
      <ContactInfo>
        <p>{contact.name}</p>
        <p>Number: {contact.number}</p>
      </ContactInfo>
      <RemoveButton onClick={handleDelete}>remove</RemoveButton>
    </ContactItem>
  );
};
