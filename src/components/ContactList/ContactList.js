import {
  RemoveButton,
  ContactInfo,
  ContactItem,
  Contacts,
} from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>
            <p>{name}</p>
            <p>Number: {number}</p>
          </ContactInfo>
          <RemoveButton onClick={() => onDeleteContact(id)}>
            remove
          </RemoveButton>
        </ContactItem>
      ))}
    </Contacts>
  );
}
