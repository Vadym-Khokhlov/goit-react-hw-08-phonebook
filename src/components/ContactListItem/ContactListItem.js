import { useDispatch } from 'react-redux';
import {
  ContactItem,
  RemoveButton,
  ContactInfo,
  ContactInfoItem,
} from 'components/Contacts/ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';
import { GiCrossMark } from 'react-icons/gi';
export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItem>
      <ContactInfo>
        <ContactInfoItem>Name: {contact.name}</ContactInfoItem>
        <ContactInfoItem>Number: {contact.number}</ContactInfoItem>
      </ContactInfo>
      <RemoveButton onClick={handleDelete}>
        <GiCrossMark color="antiquewhite" />
      </RemoveButton>
    </ContactItem>
  );
};
