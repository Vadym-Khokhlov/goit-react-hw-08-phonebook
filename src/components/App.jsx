import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { AppHeading, SectionHeading } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Harry Potter', number: '11-11-11' },
      { id: 'id-2', name: 'Hermione Granger', number: '33-33-33' },
      { id: 'id-3', name: 'Ronald Weasley', number: '22-22-22' },
      { id: 'id-4', name: 'Sirius Black', number: '55-55-55' },
      { id: 'id-5', name: 'Albus Dumbledore', number: '77-77-77' },
      { id: 'id-6', name: 'Tom Riddle', number: '66-66-66' },
      { id: 'id-7', name: 'Alastor Moody', number: '88-88-88' },
      { id: 'id-8', name: 'Belatrix Lestrange', number: '44-44-44' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { id: (module.id = nanoid()), name, number };
    if (
      this.state.contacts.some(contact => {
        const addedContact = contact.name.toLowerCase();
        const newContact = name.toLowerCase();
        return addedContact === newContact;
      })
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <AppHeading>PhoneBook</AppHeading>
        <ContactForm onSubmit={this.addContact} />
        <SectionHeading>Contacts</SectionHeading>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
