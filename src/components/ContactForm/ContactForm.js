import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { AddButton, Form, Input, Label } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const contactName = form.elements.contactName.value;
    const number = form.elements.number.value;
    const added = contacts.some(
      contact => contact.contactName.toLowerCase() === contactName.toLowerCase()
    );
    if (added) {
      alert(`${contactName} is already in your phonebook`);
    } else {
      dispatch(addContact([contactName, number]));
      alert(`${contactName} was succesfully added to your phonebook`);
      form.reset();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="contactName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Godrick Gryffindor"
            // onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+3807777777"
          />
        </Label>
        <AddButton type="submit">Add Contact</AddButton>
      </Form>
    </>
  );
};
export default ContactForm;
